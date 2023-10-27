import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import GalleryTemplate from "../../gallery";

function GalleryAll() {
  return (
    <>
       
          <div class="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
              <Sidebar />
              <div className="main-panel">
                 <GalleryTemplate/>
                <Footer />
              </div>
            </div>
          </div>
    </>
  );
}

export default GalleryAll;
