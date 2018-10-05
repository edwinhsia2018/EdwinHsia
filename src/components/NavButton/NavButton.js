import React from "react";
import './NavButton.css';

const NavButton = props => (
    <div className="md-col-4">
        <div className="button" onClick={() =>
        props.renderButton(props.id)}>
            {props.name}
        </div>
    </div>
)

export default NavButton;