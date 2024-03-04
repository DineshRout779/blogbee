import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Write from '../pages/Write';
import Popular from '../pages/Popular';
import ReadingList from '../pages/ReadingList';
import AllTopics from '../pages/AllTopics';
import ApiDocs from '../pages/ApiDocs';
import About from '../pages/About';
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import BlogList from '../components/BlogList';
import Blogs from '../pages/Blogs';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
        children: [
          {
            index: true,
            element: <BlogList />,
          },
          {
            path: ':id',
            element: <Blog />,
          },
          {
            path: 'popular',
            element: <Popular />,
          },
          {
            path: 'reading-list',
            element: <ReadingList />,
          },
          {
            path: 'topics',
            element: <AllTopics />,
          },
        ],
      },
      {
        path: 'api-docs',
        element: <ApiDocs />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'write',
        element: <Write />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default AppRoutes;
