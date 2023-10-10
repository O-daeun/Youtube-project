import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

export default function Home() {
  const {data} = useOutletContext();
  console.log(data);
  return (
    <div>
      <ul>
        <li>
          <Link to={`/watch`}>
            {data.items[0].snippet.thumbnails.default.url}
          </Link>
        </li>
        <li>
          <Link to={`/watch`}>영상클릭</Link>
        </li>
      </ul>
      
    </div>
  );
}

