import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPostDetail } from "../hooks/useFetchPostDetail";

function PostDetail() {
  const { id } = useParams(); // Get the id from the URL params
  const { post, loading, error } = useFetchPostDetail(id); // Fetch post detail

  if (loading) return <p className="text-center text-gray-500 mt-8">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-8">Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
    </div>
  );
}

export default PostDetail;
