import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { thumbnails, title, channelTitle, publishTime, publishedAt } =
    video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { videoId: video.id } });
      }}
      className={isList ? "flex flex-col sm:flex-row gap-1" : ""}
    >
      <img
        src={thumbnails.medium.url}
        alt=''
        className={isList ? "sm:w-60 sm:mr-2" : "w-full"}
      />
      <div className={isList ? "px-4 sm:px-0" : ''}>
        <h2 className='font-semibold my-2 line-clamp-2'>{title}</h2>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>
          {publishTime
            ? formatAgo(publishTime, "ko")
            : formatAgo(publishedAt, "ko")}
        </p>
      </div>
    </li>
  );
}
