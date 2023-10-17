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
    <header className="border-b border-whit flex items-center space-x-20 px-10 py-5">
      <h1 className="text-4xl">
        <Link to={`/`} className="flex items-end gap-2" onClick={handleClick}>
          <BsYoutube className="text-[#ff0000]" />
          <b>Youtube</b>
        </Link>
      </h1>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 h-10 bg-black px-3 border-0 outline-0"
          value={text}
          onChange={handleChange}
        ></input>
        <button type="submit" className="w-10 h-10 bg-gray-600 border-0 outline-0">
          <BsSearch className="m-auto" />
        </button>
      </form>
    </header>
  );
}
