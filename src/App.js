import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Home/Contact me/Contact';
import Home from './Components/Home/Home';
import ProjectDetails from './Components/Home/Projects/ProjectDetails';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contactme',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/projectDetails/:id',
          element: <ProjectDetails></ProjectDetails>,
          loader: ({params}) => fetch(`https://my-portfolio-server-seven.vercel.app/projects/${params.id}`)
        },
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
