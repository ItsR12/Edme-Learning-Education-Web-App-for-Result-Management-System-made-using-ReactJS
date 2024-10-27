import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Course from "./components/courses";
import CoursesTrend from "./components/coursestrend";
import Stats from "./components/stats";
import CTA from "./components/cta";
import Login from "./pages/login";
import SignUp from "./pages/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/coursestrend" element={<CoursesTrend />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
