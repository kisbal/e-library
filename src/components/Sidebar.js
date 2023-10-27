import React from "react";
import { Link, link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Documentation</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Bussiness Recuiretment
                  </a>
                </li>
                <li className="nav-item">
                
                  <a
                    className="nav-link"
                    href="pages/ui-features/dropdowns.html"
                  >
                    Roadmap Timeline
                  </a>
                </li>
                <li className="nav-item">
                
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Aplikasi Thinkmatch
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#gallery" aria-expanded="false" aria-controls="gallery">
              <i className="icon-camera menu-icon"></i>
              <span className="menu-title">Gallery</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="gallery">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to={"/gallery"}>
                  All Site</Link></li>
                <li className="nav-item"> <Link className="nav-link" to={"/gallery"}>
                  Site ACP</Link></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Site BCP</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Site KCP</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Site WKP</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
