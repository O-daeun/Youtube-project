import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function VideoList() {
  const { data } = useOutletContext();
  const { keyword } = useParams();
  return (
    <>
        <p>{keyword ? `🔍${keyword}` : '🔥Hot'}</p>
      <ul>
        {data.items.map((item, index) => (
          <li
            key={index}
          >
            <h3>{item.snippet.title}</h3>
            
          </li>
        ))}
      </ul>
    </>
  );
}
