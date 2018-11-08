import React from "react";
import "./Avatar.css";
import edwinImg from '../../images/edwinhsia.jpg'

const Avatar = props => (
    <div className="card" id="avatar-image">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={edwinImg} />
        </div>
        <div className="card-content avatar-card">
            <span className="card-title activator grey-text text-darken-4">Edwin Hsia<i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Edwin Hsia<i className="material-icons right">close</i></span>
            <p>I strive to create stunning websites that gives users that "WOW" experience in both function and aesthetics.  I have a passion for both design and technology and it comes together perfectly in building websites.  I am also passionate about learning and growing in my skills and knowledge.  I love to exercise, play basketball, spending time with my family and friends and mentor teens on the weekends.</p>
            <p>Learn more about me <a href="/aboutme">here</a></p>
        </div>
    </div>
)

export default Avatar;