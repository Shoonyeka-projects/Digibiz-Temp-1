import React, { Component } from 'react';
import featureData from '../json/Comp_2.json';

export default class Component_2 extends Component {
    render() {
        const { features } = featureData;

        return (
            <section id="feature" className="feature sections">
                <div className="container">
                    <div className="row">
                        <div className="main_feature text-center">
                            {features.map((feature, index) => (
                                <div key={index} className="col-sm-3">
                                    <div className="single_feature">
                                        <div className="single_feature_icon">
                                            <i className={`fa ${feature.icon}`}></i>
                                        </div>
                                        <h4>{feature.title}</h4>
                                        <div className="separator3"></div>
                                        <p>{feature.content}</p>
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
