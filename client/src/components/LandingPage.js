import React, { Component } from 'react';
import socializing from '../images/socializing.png';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
                                    Share to the world what's on your mind.
                                    Responsive site, fits on all devices, whether
                                     a mobile phone or a widescreen monitor, this site
                                     will work.
                                </p>
                                <div className="u-center-text">
                                    {
                                        localStorage.getItem("token") ?
                                        <NavLink to="/posts" className="btn btn--aquamarine">View Posts</NavLink> :
                                        <React.Fragment>
                                            <NavLink to="/signin" className="btn btn--aquamarine">Login</NavLink>
                                            <NavLink to="/signup" className="btn btn--aquamarine">Sign Up</NavLink>
                                        </React.Fragment>
                                    }
                                </div>
                            </div>
                            <div className="composition col-1-of-2">
                                <img src={socializing} alt="socializing" className="composition__photo composition_photo--p1" />
                            </div>
                        </div>
                    </section>

                    <section className="footer">
                        <div className="footer__text">
                            <h3>Created by Angel Contreras</h3>
                            <a
                                href="https://www.github.com/angelbenoit/socialmediaclone"
                                target="blank"
                                className="footer__text--link"
                            >
                                <i class="fab fa-github"></i>
                                &nbsp;Source Code
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { auth: state.auth }
}

export default connect(mapStateToProps)(LandingPage);