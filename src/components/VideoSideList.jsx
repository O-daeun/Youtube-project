import React from 'react';
import { useQuery } from 'react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function VideoSideList({keyword}) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["channelTitle", keyword],
    queryFn: () => youtube.search(keyword),
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러</p>;
  if (videos)
  return (
    <ul>
      {
        videos.map(video => <VideoCard key={video.id} video={video} />)
      }
    </ul>
  );
}

