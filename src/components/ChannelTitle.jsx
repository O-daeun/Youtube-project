import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "react-query";

export default function ChannelTitle({ channelId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["channels", channelId],
    queryFn: () => youtube.channel(channelId),
  });
  if (isLoading) return "로딩중...";
  if (error) return "에러!";
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-8 h-8 rounded-full"
        src={videos.snippet.thumbnails.default.url}
        alt={videos.snippet.title}
      />
      <h3 className="font-semibold">{videos.snippet.title}</h3>
    </div>
  );
}
