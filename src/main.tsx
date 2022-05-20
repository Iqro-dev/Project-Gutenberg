import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookRoute from "./BookRoute";
import "./index.css";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<>404</>} />
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
          </>
        }
      />
      <Route path="/book/:id" element={<BookRoute />} />
    </Routes>
  </BrowserRouter>
);
