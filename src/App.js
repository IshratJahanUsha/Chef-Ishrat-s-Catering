import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from './Pages/Home/Home/Home'
import About from './Pages/About Me/About'
import Login from './Pages/Login/Login'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Services from "./Pages/Home/Services/Services";
import Checkout from "./Pages/Checkout/Checkout";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/notFound/NotFound";
import SocialLogin from "./Pages/SocialLogin/SocialLogin";


function App() {

  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services></Services>} />
        <Route path="about" element={<About />} />

        <Route path="login" element={<Login />} />
        <Route path="checkout/login" element={<Login />} />
        <Route path="checkout/login/register/login" element={<Login />} />

        <Route path="login/sociallogin" element={<SocialLogin/>}/>

        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/login/checkout" element={<Checkout />} />

        <Route path="checkout/login/register" element={<Register />} />
        <Route path="login/register" element={<Register />} />

        <Route path="checkout/login/resetPassword" element={<NotFound />} />
        <Route path="login/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
