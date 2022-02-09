import React from "react";
import Header from "components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <section>{children}</section>
    </>
  );
};

export default DashboardLayout;
