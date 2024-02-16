import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Tip from './Tip.tsx';
import Basic from './Basic.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/tip',
    element: <Tip />,
  },
  {
    path: '/base',
    element: <Basic />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
