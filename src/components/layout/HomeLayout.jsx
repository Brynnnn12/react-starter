import React from "react";
import Header from "../home/header";
import Footer from "../home/footer";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
