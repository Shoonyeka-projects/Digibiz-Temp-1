import React, { Component } from 'react';
import serviceData from '../json/Comp_4.json';

export default class ServiceSection extends Component {
  render() {
    const { services } = serviceData;

    return (
      <section id="service" className="service">
        <div className="container-fluid">
          <div className="row">
            <div className="main_service">
              <div className="col-md-6 col-sm-12 no-padding">
                <div className="single_service single_service_text text-right">
                  <div className="head_title">
                    <h2>OUR SERVICES</h2>
                  </div>

                  <div className="row">
                    {services.map((service, index) => (
                      <div key={index} className="col-md-12 col-sm-10 col-xs-10 margin-bottom-60">
                        <div className="row">
                          <div className="col-sm-10 col-sm-offset-1 col-xs-9 col-xs-offset-1">
                            <article className="single_service_right_text">
                              <h4>{service.title}</h4>
                              <p>{service.content}</p>
                            </article>
                          </div>
                          <div className="col-sm-1 col-xs-1">
                            <figure className="single_service_icon">
                              <i className="fa fa-heart"></i>
                            </figure>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 no-padding">
                <figure className="single_service single_service_img">
                  <div className="overlay-img"></div>
                  <img src="assets/images/servicerightimg.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
