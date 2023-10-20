import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function Header({ setVideoUrl }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setVideoUrl("search");
  };
  const handleChange = (e) => setText(e.target.value);
  const handleClick = () => {
    setVideoUrl("popular");
    setText("");
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="flex items-center w-full border-b border-white space-x-20 px-10 py-5">
      <Link to={`/`} className="flex items-end gap-2" onClick={handleClick}>
        <BsYoutube className="text-4xl text-[#ff0000]" />
        <h1 className="text-4xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex w-full justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-7/12 h-10 bg-black px-3 border-0 outline-0"
          value={text}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="w-10 h-10 bg-gray-600 border-0 outline-0"
        >
          <BsSearch className="m-auto" />
        </button>
      </form>
    </header>
  );
}
