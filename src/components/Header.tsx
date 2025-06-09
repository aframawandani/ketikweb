import { PropsWithChildren } from "react"

export default function Header() {
  return (
    <header className="site-header site-header--menu-left site-header--transparent site-header--sticky">
      <div className="container">
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <a href="#">
              <img className="logo-light" src="./image/logo-5.png" alt="brand logo" />
              <img className="logo-dark" src="./image/logo-5.png" alt="brand logo" />
            </a>
          </div>
          <div className="menu-block-wrapper ">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <a href="index.html">
                  <img src="./image/icons/logo-whites.svg" alt="brand logo" />
                </a>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item">
                  <a href="#hero" className="nav-link-item">Beranda</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link-item">Tentang Kami</a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link-item">Layanan</a>
                </li>
                <li className="nav-item">
                  <a href="#team" className="nav-link-item">Team</a>
                </li>
                <li className="nav-item">
                  <a href="#testimonial" className="nav-link-item">Testimonial</a>
                </li>
              </ul>
            </nav >
          </div >
          <div className="mobile-menu-trigger">
            <span></span>
          </div>
        </nav >
      </div >
    </header >
  );
}
