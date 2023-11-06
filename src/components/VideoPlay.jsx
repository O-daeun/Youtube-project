import React from "react";
import ChannelTitle from "./ChannelTitle";

export default function VideoPlay({ videos }) {
  const {
    title,
    description,
    channelId,
  } = videos.snippet;
  return (
    <div>
      <iframe
        id={videos.id}
        className="my-4"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videos.id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="px-10">
        <h2 className="my-4">{title}</h2>
        <ChannelTitle channelId={channelId} />
        <p className="my-10">{description}</p>
      </div>
    </div>
  );
}
