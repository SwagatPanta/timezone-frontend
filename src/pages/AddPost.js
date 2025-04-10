import React, { useState,useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const{name}=useContext(UserContext);
  const inputRef=useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`new post by ${name} : ${title}`);
    setTitle('');
    setBody('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
    <input ref={inputRef} value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
    <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" required />
    <button type="submit">Add Post</button>
  </form>
  );
}

export default AddPost;
