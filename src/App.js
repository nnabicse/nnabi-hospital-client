import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Appoinment from './Pages/Appoinment/Appoinment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={<Appoinment />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
