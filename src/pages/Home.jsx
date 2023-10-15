import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

export default function Home() {
  const {data} = useOutletContext();
  return (
    <div>
      <ul>
        {
          data.items.map(item => (
            <li key={item.id.videoId ? item.id.videoId : item.id.channelId}>
              <Link to={`/watch`}>
                <div>
                  <img alt='' src={item.snippet.thumbnails.high.url} />
                </div>
                <div>
                  <h3>{item.snippet.title}</h3>
                  <p>조회수 </p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
      
    </div>
  );
}

