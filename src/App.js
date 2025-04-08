import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import AddPost from "./pages/AddPost";
import Layout from "./components/Layout";
console.log("Layout component:", Layout);

function App() {
  return (


    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </Layout>
    </Router>


  );
}

export default App;
