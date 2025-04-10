import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPostDetail } from "../hooks/useFetchPostDetail";

function PostDetail() { 
  const { id } = useParams(); // Get the id from the URL params
  const { post, loading, error } = useFetchPostDetail(id); // Call the hook with the id

  if (loading) return <p>Loading...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error message

  return ( 
    <div> 
      <h2>{post.title}</h2> 
      <p>{post.body}</p> 
    </div> 
  ); 
}

export default PostDetail;
