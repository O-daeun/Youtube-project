import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function Header({ setKeyword }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleChange = (e) => setText(e.target.value);
  const handleClick = () => {
    setText("");
  };

  return (
    <div>
      <h1>
        <Link to={`/`} onClick={handleClick}>
          <BsYoutube />
          YOUTUBE
        </Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색어를 입력하시오."
          value={text}
          onChange={handleChange}
        ></input>
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
