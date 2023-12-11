import React, { Component } from 'react';
import historyData from '../json/Comp_3.json';

export default class HistorySection extends Component {
  render() {
    const { history } = historyData;

    return (
      <section id="about" className="history sections">
        <div className="container">
          <div className="row">
            <div className="main_history">
              <div className="col-sm-6">
                <div className="single_history_img">
                  <img src={history.imageSrc} alt="" />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="single_history_content">
                  <div className="head_title">
                    <h2>{history.title}</h2>
                  </div>
                  <p>{history.content}</p>

                  <a href={history.buttonLink} className="btn btn-lg">
                    {history.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
