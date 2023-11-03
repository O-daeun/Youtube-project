import React from "react";
import {format, register} from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);
export default function VideoCard({ video }) {
  const {thumbnails, title, channelTitle, publishTime, publishedAt} = video.snippet;
  return (
    <li className="w-1/2 md:w-1/3 p-1">
      <img src={thumbnails.medium.url} alt="" className="w-full" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm">{channelTitle}</p>
      <p className="text-sm">
        {publishTime
          ? format(publishTime, 'ko')
          : format(publishedAt, 'ko')}
      </p>
    </li>
  );
}
