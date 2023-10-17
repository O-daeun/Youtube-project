import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import Root from './pages/Root';
import Search from './pages/Search';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'videos',
        element: <Home />,
      },
      {
        path: 'videos/:keyword',
        element: <Search />,
      },
      {
        path: 'videos/watch/:videoId',
        element: <Detail />,
      }
    ]
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
