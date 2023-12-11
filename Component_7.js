import React, { Component } from 'react';
import counterData from '../json/Comp_7.json';

export default class Component_7 extends Component {
  render() {
    const { counters } = counterData;

    return (
      <section id="counter" className="counter">
        <div className="video_overlay">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main_counter_area text-center">
                  <div className="row">
                    {counters.map((counter, index) => (
                      <div key={index} className={`single_counter ${index < counters.length - 1 ? 'border_right' : ''}`}>
                        <div className="col-sm-3 col-xs-12">
                          <div className="single_counter_item">
                            <i className={`icon ${counter.icon}`}></i>
                            <h2 className="statistic-counter">{counter.count}</h2>
                            <h4>{counter.label}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
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
