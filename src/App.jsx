import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Offers from "./components/Offers/Offers";
import Search from "./components/Search/Search";
import Help from "./components/Help/Help";
import Signin from "./components/SignIn/Signin";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
