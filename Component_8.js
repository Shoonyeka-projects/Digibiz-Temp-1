import React, { Component } from 'react';
import pricingData from '../json/Comp_8.json';
import textData from '../json/Comp_8.json'

export default class Component_8 extends Component {
  render() {
    const { pricingPlans } = pricingData;
    const { title, subtitle } = textData.pricingSection;
    const buttonText = textData.buttonText;

    return (
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row">
            <div className="main_pricing_area sections">
              <div className="head_title text-center">
                <h2>{title}</h2>
                <div className="subtitle">
                  {subtitle}
                </div>
                <div className="separator"></div>
              </div>

              {pricingPlans.map((plan, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <div className="single_pricing pricing_business">
                    <div className="pricing_head">
                      <h3>{plan.name}</h3>
                      <div className="pricing_price">
                        <div className="p_r text-center">{plan.price}</div>
                        <div className="m_t text-center">{plan.duration}</div>
                      </div>
                    </div>

                    <div className="pricing_body">
                      <ul>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                      <a href="#" className="btn btn-md">
                        {buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
