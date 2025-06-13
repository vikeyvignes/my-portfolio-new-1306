import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import About2 from "./pages/About2";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container mt-5 pt-5">
          <Toaster
            position="top-right"
            reverseOrder={true}
            toastOptions={{ duration: 1500 }}
          />

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about2" element={<About2 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
