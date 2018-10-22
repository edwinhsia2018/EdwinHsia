import React, { Component } from "react";
import './Resume.css';
import NavButton from '../../components/NavButton/NavButton';

class Resume extends Component {

    render() {
        return (
            <div id="resume-container">
                <NavButton />
                <strong><h1 id="title-text">Edwin Hsia</h1></strong>
                <br></br>
                <p id="header-text">SKILLS</p>
                <br></br>
                <p id="header-text">Front-End /   
                <span id="skills-text" className="flow-text left-align">  HTML5  ·  CSS3  ·  jQuery  ·  JavaScript  ·  WordPress  ·  Bootstrap  ·  Materialize  ·  SASS  ·  React.js  ·  Angular.js</span>
                </p>

                <p id="header-text">Back-End / 
                <span id="skills-text" className="flow-text left-align">  Node.js  ·  Express.js  ·  MySQL  ·  Sequelize.js  ·  MongoDB  ·  Mongoose  ·  Cheerio.js</span>
                </p>

                <p id="header-text">Applications / 
                <span id="skills-text" className="flow-text left-align"> GitHub  ·  Python  ·  Photoshop  ·  Premier  ·  Google Apps  ·  Jira  ·  Service-Now</span>
                </p>

                <br></br>
                <h3>PROJECT EXPERIENCE</h3>
                <br></br>

                Project Manager, Front-End UI Designer, API Tester   /  April 2018
                Travelbuddy2018.herokuapp.com
                ▪	Built a website that utilized API calls to pull data from weather.com and OpenTable.com to provide suggested restaurants and events depending on the type of weather that is forecasted.  Technologies used: jQuery, Bootstrap, HTML and CSS.

                Front-End Developer  /  May 2018
                Plant-tracker-app.herokuapp.com/
                ·	Built a full-stack website using MySQL, Sequelize.js, Express.js, Materialize, Passport and React.js to allow user registration and authentication as well as track plants to get watering care instructions and notifications texted to user.

                <br></br>

                <h3>WORK EXPERIENCE</h3>
                <br></br>

                <h5>UI Architect/Developer  /  Pragmatics  / July 2018–Present</h5>
                ▪	Developed concept flight visualizer using Angular 6, Cesium.JS, HTML5, CSS3, SASS, and JavaScript to display spatial aerospace data as well as path tracking and analytics.
                ▪	Developed internal team site using Reactjs as the framework and SASS, CSS3 to display team portfolio and team introductions.

                <h5>Senior Client Devices Technician  /  Mortenson Company  /  February 2016–February 2018</h5>
                ▪	Provided support for all technical escalations in a Windows 7/10 and Mac OSX environment using ServiceNow supporting over 3200 workstations.
                ▪	Revamped the ServiceNow product and services offerings and workflows for the IT department.
                ▪	Coordinated and executed a complete overhaul of the printing system and migrated 250 printers to PaperCut badge printing system.

                <h5>End User Support  /  University of Minnesota	/  May 2015–February 2016</h5>
                ▪	Desktop support for large and diverse employee base within a Windows 7 and Mac OSX environment.
                ▪	Streamlined computer fulfillment process, reducing processing time for computer orders from 18 business days to 5 business days.

                <h5>Network Engineer  /  Webcor Builders  /  April 2013–May 2015</h5>
                ▪	Desktop support for 600 employees in a Windows 7 environment — imaging, troubleshooting, and managing accounts through Active Directory.
                ▪	Managed 400 wireless accounts across AT&T, Sprint, and Verizon networks — troubleshooting, implementing MobileIron and vendor management.

                <h5>IT Inventory Specialist  /  Square  /  October 2012–April 2013</h5>
                ▪	Desktop support for 450 employees in an Apple/Mac environment and managed user access rights through Open Directory and LDAP.
                ▪	Managed 150 wireless accounts across AT&T, Verizon, and Sprint accounts and negotiated a 14% rate plan discount for each wireless account.

                <h5>System Manager II  /  OSIsoft, LLC  /  February 2011–October 2012</h5>
                ▪	Supported 900 users in a Windows 7 environment using Microsoft Exchange Management tools and Microsoft SCCM imaging tools.
                ▪	Managed 225 wireless mobility accounts in a Windows Phone 7 and iPhone environment and reduced costs by $60000/year ($5000/month).

                <h5>IT Analyst  /  Cisco Systems, Inc.  /  August 2008–January 2011</h5>
                ▪	IT support for all networking, hardware, and software for 1000 domestic/international users in a Microsoft Active Directory and LDAP environment.
                ▪	Project managed the Ironport to Cisco IT integration projects.
                <br></br>

                <h3>EDUCATION </h3>
                <br></br>

                University of Minnesota  /  Full-Stack Web Certification  /  2018
                University of California, Berkeley  /  Economics, Bachelor of Arts  /  2005
            </div>
        )
    }
}

export default Resume;