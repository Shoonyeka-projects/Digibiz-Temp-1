import React, { Component } from 'react';
import jsonData from '../json/Comp_1.json';

export default class Components_1 extends Component {
  render() {
    const { slides } = jsonData;
    return (
      <section id="home" className="home">
        <div className="overlay">
          <div className="home_skew_border">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main_home_slider text-center">
                    {slides.map((slide, index) => (
                      <div key={index} className="single_home_slider">
                        <div className="main_home wow fadeInUp" data-wow-duration="700ms">
                          <h3>{slide.title}</h3>
                          <h1>{slide.subtitle}</h1>
                          <div className="separator"></div>
                          <p>{slide.content}</p>
                          <div className="home_btn">
                            <a href={slide.button_1_Link} className="btn btn-lg m_t_10">{slide.button_1_Text}</a>
                            <a href={slide.button_2_Link} className="btn btn-default">{slide.button_2_Text}</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="scrooldown">
              <a href="#feature">
                <i className="fa fa-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
