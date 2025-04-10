import { useFetchPosts } from "../hooks/useFetchPosts";
import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { POSTS_API_URL } from "../service/api";

function Home() {
  const posts=useFetchPosts(POSTS_API_URL);

  
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
