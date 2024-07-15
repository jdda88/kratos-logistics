import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Information from "./pages/Information";
import NavBar from "./components/NavBar";
import ApplyPage from "./pages/ApplyPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </div>
  );
}

export default App;
