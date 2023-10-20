import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useQuery } from 'react-query';
import Header from './components/Header';

export default function App() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`/videos/${videoUrl}.json`).then(res =>
      res.json()
    )
  );
  const [videoUrl, setVideoUrl] = useState('popular');

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <Header setVideoUrl={setVideoUrl} />
      <Outlet context={{data}} />
    </div>
  );
}

