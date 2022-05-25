import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookRoute from "./books/BookRoute";
import "./index.css";
import Header from "./components/Header";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase";
import AuthRoute from "./auth/AuthRoute";
import Layout from "./layouts/layout";

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<>404</>} />
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/book/:id" element={<BookRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
