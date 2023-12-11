import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <body data-spy="scroll" data-target=".navbar-collapse">

        <div class='preloader'><div class='loaded'>&nbsp;</div></div>
      <div className="culmn">
        <header id="main_menu" className="header navbar-fixed-top">
          <div className="main_menu_bg">
            <div className="container">
              <div className="row">
                <div className="nave_menu">
                  <nav className="navbar navbar-default">
                    <div className="container-fluid">
                      {/* Brand and toggle get grouped for better mobile display */}
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">
                          <img src="assets/images/logo.png" alt="Home" />
                        </Link>
                      </div>

                      {/* Collect the nav links, forms, and other content for toggling */}
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                          <li><Link to="/">HOME</Link></li>
                          <li><Link to="#about">ABOUT US</Link></li>
                          <li><Link to="#portfolio">PORTFOLIO</Link></li>
                          <li><Link to="#pricing">PRICING</Link></li>
                          <li><Link to="#team">TEAM</Link></li>
                          <li><Link to="#blog">BLOG</Link></li>
                          <li><Link to="#contact">CONTACT</Link></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header> {/* End of header */}
      </div>
      </body>
    );
  }
}
