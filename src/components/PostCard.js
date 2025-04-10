import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 space-y-3 border border-gray-200">
      <h3 className="text-xl font-semibold text-blue-700 capitalize">{post.title}</h3>
      <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
      <Link
        to={`/post/${post.id}`}
        className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
      >
        Read more →
      </Link>
    </div>
  );
}
