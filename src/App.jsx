import "./App.css";
import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Pizzas from "./views/Pizza";
import Register from "./views/Register";
import Login from "./views/Login";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <>
      <CartProvider>

        <Navbar />
        <Routes>
          <Route path="/pizza-mia/" element={<Home />}></Route>
          <Route
            path="/pizza-mia/Register"
            element={<Register />}
          ></Route>
          <Route
            path="/pizza-mia/Login"
            element={<Login />}
          ></Route>
          <Route
            path="/pizza-mia/Cart"
            element={<Cart />}
          ></Route>
          <Route
            path="/pizza-mia/Profile"
            element={token ? <Profile /> : <Login />} />
          <Route
            path="/pizza-mia/Pizza/:id" // nueva linea
            element={<Pizzas />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />


      </CartProvider>


    </>
  );
};

export default App;
