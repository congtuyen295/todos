import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Layout/header";
import Footer from "../Components/Layout/footer";



const HomePage = () => {
  return (
    <>
      <Header />
      <section style={{margin: "50px 0"}}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
