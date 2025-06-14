import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import About2 from "./pages/About2";
import { Toaster } from "react-hot-toast";
import Details from "./pages/Details";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <ScrollTop />
      <div className="App">
        <div className="container mt-5 pt-5">
          <Toaster
            position="top-right"
            reverseOrder={true}
            toastOptions={{ duration: 1500 }}
          />

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about2" element={<About2 />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
