import React, { Component } from 'react';
import socializing from '../images/socializing.png';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="landing__header">
                    <div className="landing__header--text">
                        <h1 className="landing__header--title">Social Media</h1>
                        <a href="#about" className="btn btn--white btn--animated">Learn more</a>
                    </div>
                </div>

                <main>
                    <section id="about" className="section-about">
                        <div
                            style={{ "marginTop": "-12.5rem" }}
                            className="u-center-text u-margin-bottom-4"
                        >
                            <h2 className="heading-secondary">
                                About this site
                            </h2>
                        </div>

                        <div className="row">
                            <div className="col-1-of-2">
                                <h3 className="heading-tertiary u-center-text">
                                    Social Media site similar to reddit
                                </h3>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas aliquam et
                                    deleniti officiis, quia facere a nisi
                                    maxime iure magnam obcaecati illum rerum
                                    ullam voluptates consequuntur unde
                                    doloremque mollitia dolorum.
                                </p>

                                <h3 className="heading-tertiary u-center-text">
                                    Edit your profile
                                </h3>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas aliquam et
                                    deleniti officiis, quia facere a nisi
                                    maxime iure magnam obcaecati illum rerum
                                    ullam voluptates consequuntur unde
                                    doloremque mollitia dolorum.
                                </p>

                                <div className="u-center-text">
                                    <a href="#about" className="btn btn--aquamarine">Learn more</a>
                                </div>
                            </div>
                            <div className="col-1-of-2">
                                <div className="composition">
                                    <img src={socializing} alt="socializing" className="composition__photo composition_photo--p1" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="footer">
                        <div className="test">
                            <h3>one</h3>
                            <h3>two</h3>
                            <h3>three</h3>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default LandingPage;