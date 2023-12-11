import React, { Component } from 'react';
import caseStudyData from '../json/Comp_6.json';

export default class Component_6 extends Component {
  render() {
    const { sections } = caseStudyData;

    return (
      <section id="study" className="study text-center wow fadeIn" data-wow-duration="2s" data-wow-delay="1.5s">
        <div className="container">
          <div className="row">
            <div className="main_study_area sections">
              <div className="head_title text-center">
                <h2>{sections[0].title}</h2>
                <div className="subtitle">
                  {sections[0].subtitle}
                </div>
                <div className="separator"></div>
              </div>
              <div className="single_study_content">
                <div className="col-sm-6">
                  <div className="single_study_slid_area">
                    <div className="single_study_text">
                      <div className="study_slider">
                        {sections[0].items.map((item, index) => (
                          <div key={index} className="item">
                            <div className="s_study_icon">
                              <i className={`fa ${item.icon}`}></i>
                            </div>
                            <h4>{item.title}</h4>
                            <div className="separator3"></div>
                            <p>
                              {item.content}
                            </p>
                            <a href={item.buttonLink} className="btn btn-lg">
                              {item.buttonText}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single_study_right_img">
                  <div className="col-sm-6">
                    <div className="single_study_img">
                      <img src="assets/images/study.jpg" alt="" />
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
