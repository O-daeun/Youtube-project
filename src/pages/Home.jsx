import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/watch`}>영상클릭</Link>
        </li>
        <li>
          <Link to={`/watch`}>영상클릭</Link>
        </li>
      </ul>
      
    </div>
  );
}

