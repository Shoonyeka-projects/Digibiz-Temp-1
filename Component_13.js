import React, { Component } from 'react';
import trialData from '../json/Comp_13.json';

export default class Component_13 extends Component {
  render() {
    const { title, subtitle, buttonText, trialUrl } = trialData;

    return (
      <section id="trial" className="trial text-center wow fadeIn" data-wow-duration="2s" data-wow-delay="1.5s">
        <div className="main_trial_area">
          <div className="video_overlay sections">
            <div className="container">
              <div className="row">
                <div className="main_trial">
                  <div className="col-sm-12">
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                    <a href={trialUrl} className="btn btn-lg">{buttonText}</a>
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
