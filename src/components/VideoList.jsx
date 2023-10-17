import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

export default function VideoList() {
  const { data } = useOutletContext();
  const { keyword } = useParams();
  return (
    <>
        <p>{keyword}</p>
      <ul>
        {data.items.map((item) => (
          <li
            key={
              typeof item.id === "string"
                ? item.id
                : item.id.videoId
                ? item.id.videoId
                : item.id.channelId
            }
          >
            <Link to={``}>
              <div>
                <img alt="" src={item.snippet.thumbnails.high.url} />
              </div>
              <div>
                <h3>{item.snippet.title}</h3>
                <p>조회수 </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
