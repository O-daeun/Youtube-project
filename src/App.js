import React from 'react';
import { Outlet } from "react-router-dom";
import { useQuery } from 'react-query';
import Header from './components/Header';

export default function App() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/videos/popular.json').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='bg-gray-800 text-white'>
      <Header />
      <Outlet context={{data}} />
    </div>
  );
}

