import React, { Component } from "react";
import './Resume.css';
import NavButton from '../../components/NavButton/NavButton';

class Resume extends Component {

    render() {

        return (
            <div className="resume-bg">
                <div id="resume-container">
                    <NavButton />
                    <div id="resume-body">
                        <strong><h1 className="left-align" id="title-text">Edwin Hsia</h1></strong>


                        <br></br>
                        <div className="divider"></div>
                        <br></br>

                        <p id="header-text" className="left-align">SKILLS</p>
                        <p id="subheader-text" className="left-align">Front-End
                <span id="skills-text" className="flow-text left-align">  /  HTML5  ·  CSS3  ·  jQuery  ·  JavaScript  ·  WordPress  ·  Bootstrap  ·  Materialize  ·  SASS  ·  React.js  ·  Angular.js</span>
                        </p>

                        <p id="subheader-text" className="left-align">Back-End
                <span id="skills-text" className="flow-text left-align"> /  Node.js  ·  Express.js  ·  MySQL  ·  Sequelize.js  ·  MongoDB  ·  Mongoose  ·  Cheerio.js</span>
                        </p>

                        <p id="subheader-text" className="left-align">Applications
                <span id="skills-text" className="flow-text left-align"> /  GitHub  ·  Python  ·  Photoshop  ·  Premier  ·  Google Apps  ·  Jira  ·  Service-Now</span>
                        </p>

                        <br></br>
                        <div className="divider"></div>
                        <br></br>

                        <p id="header-text" className="left-align">PROJECT EXPERIENCE</p>

                        <p id="subheader-text" className="left-align">Project Manager, Front-End UI Designer, API Tester   /  April 2018</p>
                        <a id="project-text" className="left-align" href="Travelbuddy2018.herokuapp.com">Travel Buddy</a>
                        <p id="work-text" className="left-align">▪	Built a website that utilized API calls to pull data from weather.com and OpenTable.com to provide suggested restaurants and events depending on the type of weather that is forecasted.  Technologies used: jQuery, Bootstrap, HTML and CSS.</p>

                        <p id="subheader-text" className="left-align">Front-End Developer  /  May 2018</p>
                        <a id="project-text" className="left-align" href="Plant-tracker-app.herokuapp.com">Plant Tracker</a>
                        <p id="work-text" className="left-align">▪	Built a full-stack website using MySQL, Sequelize.js, Express.js, Materialize, Passport and React.js to allow user registration and authentication as well as track plants to get watering care instructions and notifications texted to user.</p>

                        <br></br>
                        <div className="divider"></div>
                        <br></br>

                        <p id="header-text" className="left-align">WORK EXPERIENCE</p>

                        <ul className="collapsible">
                            <li>
                                <div id="subheader-text" className="collapsible-header">UI Architect/Developer  /  Pragmatics  / July 2018–Present</div>
                                <div id="work-text" className="collapsible-body"><span>▪	Developed concept flight visualizer using Angular 6, Cesium.JS, HTML5, CSS3, SASS, and JavaScript to display spatial aerospace data as well as path tracking and analytics.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Second</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Third</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>

                        <p id="subheader-text" className="left-align">UI Architect/Developer  /  Pragmatics  / July 2018–Present</p>
                        <p id="work-text" className="left-align">▪	Developed concept flight visualizer using Angular 6, Cesium.JS, HTML5, CSS3, SASS, and JavaScript to display spatial aerospace data as well as path tracking and analytics.</p>
                        <p id="work-text" className="left-align">▪	Developed internal team site using Reactjs as the framework and SASS, CSS3 to display team portfolio and team introductions.</p>

                        <p id="subheader-text" className="left-align">Senior Client Devices Technician  /  Mortenson Company  /  February 2016–February 2018</p>
                        <p id="work-text" className="left-align">▪	Provided support for all technical escalations in a Windows 7/10 and Mac OSX environment using ServiceNow supporting over 3200 workstations.</p>
                        <p id="work-text" className="left-align">▪	Revamped the ServiceNow product and services offerings and workflows for the IT department.</p>
                        <p id="work-text" className="left-align">▪	Coordinated and executed a complete overhaul of the printing system and migrated 250 printers to PaperCut badge printing system.</p>

                        <p id="subheader-text" className="left-align">End User Support  /  University of Minnesota	/  May 2015–February 2016</p>
                        <p id="work-text" className="left-align">▪	Desktop support for large and diverse employee base within a Windows 7 and Mac OSX environment.</p>
                        <p id="work-text" className="left-align">▪	Streamlined computer fulfillment process, reducing processing time for computer orders from 18 business days to 5 business days.</p>

                        <p id="subheader-text" className="left-align">Network Engineer  /  Webcor Builders  /  April 2013–May 2015</p>
                        <p id="work-text" className="left-align">▪	Desktop support for 600 employees in a Windows 7 environment — imaging, troubleshooting, and managing accounts through Active Directory.</p>
                        <p id="work-text" className="left-align">▪	Managed 400 wireless accounts across AT&T, Sprint, and Verizon networks — troubleshooting, implementing MobileIron and vendor management.</p>

                        <p id="subheader-text" className="left-align">IT Inventory Specialist  /  Square  /  October 2012–April 2013</p>
                        <p id="work-text" className="left-align">▪	Desktop support for 450 employees in an Apple/Mac environment and managed user access rights through Open Directory and LDAP.</p>
                        <p id="work-text" className="left-align">▪	Managed 150 wireless accounts across AT&T, Verizon, and Sprint accounts and negotiated a 14% rate plan discount for each wireless account.</p>

                        <p id="subheader-text" className="left-align">System Manager II  /  OSIsoft, LLC  /  February 2011–October 2012</p>
                        <p id="work-text" className="left-align">▪	Supported 900 users in a Windows 7 environment using Microsoft Exchange Management tools and Microsoft SCCM imaging tools.</p>
                        <p id="work-text" className="left-align">▪	Managed 225 wireless mobility accounts in a Windows Phone 7 and iPhone environment and reduced costs by $60000/year ($5000/month).</p>

                        <p id="subheader-text" className="left-align">IT Analyst  /  Cisco Systems, Inc.  /  August 2008–January 2011</p>
                        <p id="work-text" className="left-align">▪	IT support for all networking, hardware, and software for 1000 domestic/international users in a Microsoft Active Directory and LDAP environment.</p>
                        <p id="work-text" className="left-align">▪	Project managed the Ironport to Cisco IT integration projects.</p>

                        <br></br>
                        <div className="divider"></div>
                        <br></br>

                        <p id="header-text" className="left-align">EDUCATION </p>

                        <p className="left-align white-text">University of Minnesota  /  Full-Stack Web Certification  /  2018</p>
                        <p className="left-align white-text">University of California, Berkeley  /  Economics, Bachelor of Arts  /  2005</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;