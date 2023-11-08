import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "react-query";

export default function ChannelTitle({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channels", id], () => youtube.channelImageURL(id), {
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) return "로딩중...";
  if (error) return "에러!";
  return (
    <div className="flex items-center gap-2">
      <img className="w-8 h-8 rounded-full" src={url} alt={name} />
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
}
