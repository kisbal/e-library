import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Power of Thinkmatch 2023
            {/* <a href="https://www.bootstrapdash.com/" target="_blank">
              Bootstrap admin template
            </a> */}
          </span>
          {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Hand-crafted & made with <i className="ti-heart text-danger ml-1"></i>
          </span> */}
        </div>
        {/* <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Distributed by
            <a href="https://www.themewagon.com/" target="_blank">
              Themewagon
            </a>
          </span>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
