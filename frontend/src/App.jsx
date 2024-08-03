import React, { useState } from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Books from "./Components/Books";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Authprovider";
import Login from "./Components/Login";

const App = () => {
  const [clicked, setClicked] = useState("home");
  const [authUser, setAuthUser] = useAuth();
  return (
    <div>
      <Navbar setClicked={setClicked} clicked={clicked} />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={
            authUser ? <Books setClicked={setClicked} /> : <Navigate element={<Login />} />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer setClicked={setClicked} />
    </div>
  );
};

export default App;
