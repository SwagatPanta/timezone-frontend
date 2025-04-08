
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(response => {
        console.log("Fetched posts:", response.data); // Debugging
        setPosts(response.data);
      })
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h2>Mini Blog</h2>
      <Link to="/add">➕ Add Post</Link>
      <div>
        {
          posts.map(
            post => (<PostCard key={post.id} post={post} />)
          )
        }
      </div>
    </div>
  );
}

export default Home;
