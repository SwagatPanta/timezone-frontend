import React, { useState, useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { name } = useContext(UserContext);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New post by ${name}: ${title}`);
    setTitle("");
    setBody("");
    inputRef.current.focus();
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
