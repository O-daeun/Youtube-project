import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import { useQuery } from 'react-query';

export default function Root() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/videos/popular.json').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <Header />
      <Outlet context={{data}} />
    </div>
  );
}

