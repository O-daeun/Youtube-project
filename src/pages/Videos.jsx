import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () =>
      fetch(`/videos/${keyword ? "search" : "popular"}.json`)
        .then((res) => res.json())
        .then((data) => data.items),
  });

  return (
    <>
      <p>{keyword ? `🔍${keyword}` : "🔥Hot"}</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>Someting is wrong 😿</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video}  />
          ))}
        </ul>
      )}
    </>
  );
}
