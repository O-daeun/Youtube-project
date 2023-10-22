import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import FakeYoutube from "../api/fakeYoutube";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
        const youtube = new FakeYoutube();
        return youtube.search(keyword);
    }
  });

  return (
    <>
      <p>{keyword ? `🔍${keyword}` : "🔥Hot"}</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>Someting is wrong 😿</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
