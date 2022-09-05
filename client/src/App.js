import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
