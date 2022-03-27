import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Results } from './Results';

export const Routes = () => {
  const elements = useRoutes([
    { path: '/', element: <Navigate to='/search' /> },
    { path: '/search', element: <Results /> },
    { path: '/video', element: <Results /> },
    { path: '/image', element: <Results /> },
    { path: '/news', element: <Results /> },
  ]);

  return elements;
};
