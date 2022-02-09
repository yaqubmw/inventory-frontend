import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import Report from "pages/Report";
import Item from "pages/Item";
import Customer from "pages/Customer";
import Tax from "pages/Tax";
import Transaction from "pages/Transaction";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"item/*"} element={<Item />} />
          <Route path={"report/*"} element={<Report />} />
          <Route path={"customer/*"} element={<Customer />} />
          <Route path={"tax/*"} element={<Tax />} />
          <Route path={"transaction/*"} element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
