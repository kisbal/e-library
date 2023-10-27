import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
       
          <div class="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
              <Sidebar />
              <div className="main-panel">
                  <Dashboard />
                <Footer />
              </div>
            </div>
          </div>
    </>
  );
}

export default Homepage;
