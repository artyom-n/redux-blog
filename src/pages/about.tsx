import React from 'react';

const About = () => {
    return (
        <section>
            <div className="container">
            <div className="row center-xs">
                    <div className="col-xs-6">
                        <h3 className="about">About</h3>
                        <div className="about-wrapper">
                            <div className="about-image-wrapper">
                                <img src="https://picsum.photos/id/521/160/230" 
                                    alt="" 
                                    className="about-image"
                                />
                            </div>
                            <p className="about-text">
                                It is a long established 
                                fact that a reader will be 
                                distracted by the readable 
                                content of a page when looking 
                                at its layout. The point of using 
                                Lorem Ipsum is that it has a 
                                more-or-less normal distribution 
                                of letters, as opposed to using 
                                'Content here, content here', 
                                making it look like readable English. 
                                Many desktop publishing packages 
                                and web page editors now use Lorem 
                                Ipsum as their default model text, 
                                and a search for 'lorem ipsum' 
                                will uncover many web sites still 
                                in their infancy, 
                                fact that a reader will be 
                                distracted by the readable 
                                content of a page when looking 
                                at its layout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;