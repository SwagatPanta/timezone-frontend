// hooks/useFetchPostDetail.js
import { useState, useEffect } from "react";
import axios from "axios";
import { getPostDetailUrl } from "../service/api";

export function useFetchPostDetail(id) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//   const url=getPostDetailUrl(id);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true); // Make sure to set loading before the API call
      try {
        const response = await axios.get(getPostDetailUrl(id)); // No $ sign, just 'id'
        setPost(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost(); // Call the function if id exists
    }
  }, [id]); // Only runs when the id changes

  return { post, loading, error }; // Return the necessary states
}
