import React, { Component } from 'react';
import strings from '../json/Comp_10.json';

export default class Component_10 extends Component {
  render() {
    return (
      <section id="clogo" className="clogo">
        <div className="container">
          <div className="row">
            <div className="main_clogo sections text-center">
              <div className="head_title text-center">
                <h2>{strings.title}</h2>
                <div className="subtitle">{strings.subtitle}</div>
                <div className="separator"></div>
              </div>
              {/* End off Head_title */}
              {this.renderLogos()}
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </section>
    );
  }

  renderLogos() {
    const { logos } = strings;

    return logos.map((logo, index) => (
      <div key={index} className="col-sm-3 col-xs-6">
        <a href=""><img src={`assets/images/${logo}`} alt="" /></a>
      </div>
    ));
  }
}
