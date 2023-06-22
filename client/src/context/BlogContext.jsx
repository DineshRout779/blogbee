import { createContext, useEffect, useReducer } from 'react';
import {
  blogReducers,
  getBlogsFailed,
  getBlogsStart,
  getBlogsSuccess,
} from '../reducers/blogReducers';
import { getAllBlogs } from '../services/lib/blog';

const INITIAL_STATE = {
  blogs: [],
  categories: [],
  loading: false,
  error: null,
};

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducers, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      try {
        let res = await getAllBlogs();
        dispatch(getBlogsStart());

        if (res.status === 200) {
          dispatch(getBlogsSuccess(res.data.data));
        }
      } catch (err) {
        console.log(err.response);
        dispatch(getBlogsFailed(err.response.data.error));
      }
    })();
  }, []);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
