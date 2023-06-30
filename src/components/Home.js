import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
