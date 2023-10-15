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
import Results from './pages/Results';


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
        path: '/results',
        element: <Results />,
      },
      {
        path: '/watch',
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
