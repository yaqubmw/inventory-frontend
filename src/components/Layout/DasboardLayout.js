import React from "react";
import Header from "components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
