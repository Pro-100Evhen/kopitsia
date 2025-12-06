import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const MainHFTemplate = () => {
   return (
      <>
         <Header />
         <Outlet />
         <ContactForm />
         <Footer />
      </>
   );
};

export default MainHFTemplate;
