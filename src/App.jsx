import axios from "axios";
import { useEffect, useState } from "react";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import MedicineForm from "./pages/MedicineForm";


function App() {

  return (
    <Routes>
      <Route path="/login" Component={LoginForm} />
      <Route path="/signup" Component={SignupForm} />
      <Route path="/profile" Component={Profile} />
      <Route path="/medicine/create" Component={MedicineForm} />
    </Routes>
  )
}

export default App
