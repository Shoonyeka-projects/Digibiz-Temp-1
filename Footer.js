import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className="culmn">
        {/* Footer section */}
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main_footer">
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <div className="flowus">
                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                        <Link to="#"><i className="fa fa-google-plus"></i></Link>
                        <Link to="#"><i className="fa fa-instagram"></i></Link>
                        <Link to="#"><i className="fa fa-youtube"></i></Link>
                        <Link to="#"><i className="fa fa-dribbble"></i></Link>
                      </div>
                    </div>

                    <div className="col-sm-6 col-xs-12">
                      <div className="copyright_text">
                        <p className="wow fadeInRight" data-wow-duration="1s">
                          Made with <i className="fa fa-heart"></i> by{' '}
                          <a href="http://bootstrapthemes.co">Bootstrap Themes</a> 2016. All Rights Reserved
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> {/* End of footer Section */}
      </div>
    );
  }
}
