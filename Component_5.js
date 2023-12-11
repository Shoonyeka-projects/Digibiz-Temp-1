import React, { Component } from 'react';
import portfolioData from '../json/Comp_5.json';

export default class PortfolioSection extends Component {
  render() {
    const { works } = portfolioData;
    return (
      <section id="portfolio" className="portfolio sections">
        <div className="container-fluid">
          <div className="row">
            <div className="main_portfolio">
              <div className="col-sm-12">
                <div className="head_title text-center">
                  <h2>RECENT WORKS</h2>
                  <div className="subtitle">
                    It has survived not only five centuries, but also the leap scrambled it to make a type.
                  </div>
                  <div className="separator"></div>
                </div>
              </div>
              <div className="work_menu text-center">
                <div id="filters" className="toolbar mb2 mt2">
                  <button className="btn-md fil-cat filter active" data-filter="all">ALL</button>/
                  <button className="btn-md fil-cat filter" data-rel="web" data-filter=".web">WEB DESIGN</button>/
                  <button className="btn-md fil-cat filter" data-rel="design" data-filter=".design">PRINT DESIGN</button>/
                  <button className="btn-md fil-cat filter" data-rel="flyers" data-filter=".flyers">ANIMATION</button>/
                  <button className="btn-md fil-cat filter" data-rel="bcards" data-filter=".bcards">ART</button>/
                  <button className="btn-md fil-cat filter" data-rel="photo" data-filter=".photo">PHOTOGRAPHY</button>/
                  <button className="btn-md fil-cat filter" data-rel="video" data-filter=".video">VIDEO</button>
                </div>
              </div>

              <div style={{ clear: 'both' }}></div>
              <div id="portfoliowork">
            {works.map((work, index) => (
              <div key={index} className={`single_portfolio tile scale-anm ${work.category.join(' ')}`}>
                <img src={work.imageSrc} alt="" />
                <a href={work.imageSrc} className="portfolio-img">
                  <div className="grid_item_overlay">
                    <div className="separator4"></div>
                    <h3>{work.title}</h3>
                    <p>{work.tags.join(' / ')}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

              <div style={{ clear: 'both' }}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
