import { useFetchPosts } from "../hooks/useFetchPosts";
import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { POSTS_API_URL } from "../service/api";

function Home() {
  const posts = useFetchPosts(POSTS_API_URL);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Latest Posts</h2>
        <Link
          to="/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 text-sm"
        >
          ➕ Add Post
        </Link>
      </div>

      <div className="space-y-4">
        {posts.slice(0, 5).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
