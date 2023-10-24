import "./App.css";
import Header from "./pages/Header";
import HireMe from "./pages/HireMe";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
