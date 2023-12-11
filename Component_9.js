import React, { Component } from 'react';
import teamData from '../json/Comp_9.json';

export default class Component_9 extends Component {
  render() {
    const { title, subtitle, teamMembers } = teamData;

    return (
      <section id="team" className="team">
        <div className="main_team_area">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="head_title textwhite text-center margin-top-80">
                  <h2>{title}</h2>
                  <div className="subtitle">{subtitle}</div>
                  <div className="separator"></div>
                </div>

                <div className="main_team">
                  <ul>
                    {teamMembers.map((member, index) => (
                      <li key={index}>
                        <div className="single_team_img">
                          <img src={member.image} alt={member.name} />
                        </div>
                        <div className="single_team_text">
                          <h4>{member.name}</h4>
                          <p>{member.role}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
