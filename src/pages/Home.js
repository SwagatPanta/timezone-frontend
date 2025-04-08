import { useFetchPosts } from "../hooks/useFetchPosts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

function Home() {
  const posts=useFetchPosts('https://jsonplaceholder.typicode.com/posts?_limit=5');

  
  return (
    <div>      
      <Link to="/add">➕ Add Post</Link>
      <div>
        {
          posts.slice(0, 5).map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
