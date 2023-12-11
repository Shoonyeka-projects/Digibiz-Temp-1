import React, { Component } from 'react';
import blogData from '../json/Comp_11.json';

export default class Component_11 extends Component {
  render() {
    const { title, subtitle, blogs } = blogData;

    return (
      <section id="blog" className="blog">
        <div className="container-fluid">
          <div className="row">
            <div className="main_blog sections">
              <div className="head_title text-center">
                <h2>{title}</h2>
                <div className="subtitle">{subtitle}</div>
                <div className="separator"></div>
              </div>
              {/* End off Head_title */}
              <div className="main_blog_content">
                {blogs.map((blog, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="single_blog_area textwhite">
                      <div className="row">
                        <div className="col-sm-6 no-padding">
                          <div className="single_blog_img">
                            <img src={blog.image} alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 no-padding">
                          <div className="single_blog_text s_b_left">
                            <p>{blog.category}</p>
                            <h3>{blog.title}</h3>
                            <div className="separator2"></div>
                            <p>{blog.content}</p>
                            <a href={blog.readMoreLink} className="read_more">Read More </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
