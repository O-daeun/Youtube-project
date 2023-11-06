import React from "react";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "react-query";
import VideoPlay from "../components/VideoPlay";
import VideoSideList from "../components/VideoSideList";

export default function VideoDetails() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["detail", videoId],
    queryFn: () => youtube.detail(videoId),
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러</p>;
  if (videos)
    return (
      <div className="flex">
        <VideoPlay videos={videos} />
        <VideoSideList keyword={videos.snippet.channelTitle} />
      </div>
    );
}
