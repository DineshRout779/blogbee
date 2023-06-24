import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { ButtonGroup, Container } from '@chakra-ui/react';
import ButtonSolid from '../common/ButtonSolid';
import ButtonOutline from '../common/ButtonOutline';
import { addBlog } from '../../services/lib/blog';
import { useAuth } from '../../hooks/useAuth';
import { Text, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react';
import TurndownService from 'turndown';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const turndownService = new TurndownService();

const content = ``;

const TextEditor = () => {
  const {
    state: { user },
  } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });
  const navigate = useNavigate();

  const saveBlog = async () => {
    try {
      const data = {
        title,
        description,
        content: turndownService.turndown(editor.getHTML()),
      };

      const res = await addBlog(data, user._id);

      console.log(res);

      if (res.status === 200) {
        toast.success('Blog created successfully!');
        navigate('/blogs');
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Container maxW={'1200px'}>
      <TextInput
        name='title'
        placeholder='Blog title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label='Title'
        withAsterisk
        my={8}
      />

      <Textarea
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Blog description'
        label='Description'
        withAsterisk
        my={8}
      />
      <Text>Content</Text>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar sticky stickyOffset={80}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content mih='65vh' />
      </RichTextEditor>

      <ButtonGroup my='4'>
        <ButtonOutline>Cancel</ButtonOutline>
        <ButtonSolid onClick={saveBlog}>Save</ButtonSolid>
      </ButtonGroup>
    </Container>
  );
};

export default TextEditor;
