import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import Member from "./components/page/Member";
import Product from "./components/page/Product";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/member" element={<Member />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
