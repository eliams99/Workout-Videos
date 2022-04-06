import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Videos from "./components/videos";
import Video from "./components/video";
import Navbar from "./components/navbar";
import Login from "./components/login";
import auth from "./services/authService";
import "./App.css";

function App() {
  let token = auth.getCurrentUser();

  if (!token)
    return (
      <div className="text-light">
        <Login />
      </div>
    );
  return (
    <React.Fragment>
      <Navbar />
      <div className="text-light">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:id" element={<Video currentUser={token} />} />
          <Route path="/" exact element={<Navigate replace to="/videos" />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
