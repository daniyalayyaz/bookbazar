import logo from './logo.svg';
import './App.css';
import Login from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/Signup';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />} />
 
    </Routes>
  );
}

export default App;
