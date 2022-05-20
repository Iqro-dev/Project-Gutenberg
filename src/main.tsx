import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./index.css";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<>404</>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </BrowserRouter>
);
