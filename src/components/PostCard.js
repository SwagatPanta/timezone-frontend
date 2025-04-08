// src/components/PostCard.js
import React from "react";
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div style={{ margin: '1rem 0', border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
      <Link to={`/post/${post.id}`}>Read more</Link>
    </div>
  );
}
