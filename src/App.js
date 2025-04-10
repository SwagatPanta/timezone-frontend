import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import AddPost from "./pages/AddPost";
import Layout from "./components/Layout";
import { UserContext } from "./context/UserContext";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <UserContext.Provider value={{ name: "John Doe", id: 1 }}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/add" element={<AddPost />} />
            </Routes>
          </Layout>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
