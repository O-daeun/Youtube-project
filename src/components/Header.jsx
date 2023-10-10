import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>
        <Link to={`/`}>🟥YOUTUBE</Link>
      </h1>
      <form>
        <input type='text' placeholder='검색어를 입력하시오.'></input>
        <button type='submit'>🔍</button>
      </form>
    </div>
  );
}

