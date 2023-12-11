import React, { Component } from 'react';
import contactData from '../json/Comp_12.json';

export default class Component_12 extends Component {
  render() {
    const { title, subtitle, contactInfo } = contactData;

    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact_contant sections">
                <div className="head_title text-center">
                  <h2>{title}</h2>
                  <div className="subtitle">{subtitle}</div>
                  <div className="separator"></div>
                </div>
                {/* End off Head_title */}
                <div className="row">
                  <div className="col-sm-6">
                    <div className="main_contact_info">
                      <div className="row">
                        <div className="contact_info_content padding-top-90 padding-bottom-60 p_l_r">
                          {contactInfo.map((info, index) => (
                            <div key={index} className="col-sm-12">
                              <div className="single_contact_info">
                                <div className="single_info_text">
                                  <h3>{info.type.toUpperCase()}</h3>
                                  <h4>{info.text}</h4>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="single_contant_left padding-top-90 padding-bottom-90">
                      <form action="#" id="formid">
                        <div className="col-lg-8 col-md-8 col-sm-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-1">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder="First Name" required />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email" required />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-group">
                                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <textarea className="form-control" name="message" rows="7" placeholder="Message" />
                          </div>

                          <div>
                            <input type="submit" value="SEND MESSAGE" className="btn btn-lg" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
