import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import { useQuery } from 'react-query';

export default function Root() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=blackpink&key=AIzaSyChOv8L_-0aJt78-o8QPkKDzrbKWFigiGw').then(res =>
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

