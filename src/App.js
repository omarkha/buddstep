import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import PurchasePage from "./components/pages/PurchasePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<PurchasePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
