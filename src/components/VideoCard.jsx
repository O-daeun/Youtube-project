import React from "react";
import { formatAgo } from "../util/date";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  const {thumbnails, title, channelTitle, publishTime, publishedAt} = video.snippet;
  return (
    <li>
      <Link to={`/videos/watch/${video.id}`}>
        <img src={thumbnails.medium.url} alt="" className="w-full" />
        <h2 className="font-semibold my-2 line-clamp-2">{title}</h2>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">
          {publishTime
            ? formatAgo(publishTime, 'ko')
            : formatAgo(publishedAt, 'ko')}
        </p>
        </Link>
    </li>
  );
}
