import logo from './logo.svg';
import About from "./pages/about/About"
import Cantact from './pages/cantacts/Cantact';
import Blog from './pages/blog/Blog'
import Careers from './pages/careers/Careers'
import Services from './pages/services/Services'
import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/cantact" element={<Cantact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
