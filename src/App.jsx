import axios from "axios";
import { useEffect, useState } from "react";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";


function App() {

  return (
    <Routes>
      <Route path="/login" Component={LoginForm} />
      <Route path="/signup" Component={SignupForm} />
      <Route path="/profile" Component={Profile} />
    </Routes>
  )
}

export default App
