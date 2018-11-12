import React, { Component } from "react";
import './Aboutme.css';
import '../../components/Avatar/Avatar';
import NavButton from "../../components/NavButton/NavButton";
import styled from "styled-components";

class Aboutme extends Component {

    render() {

        const Wrapper = styled.div`
        /* omitted */`;

        return (
            <Wrapper>
            <div>
                <NavButton />
               About me page
            </div>
            </Wrapper>
        )
    }


}

export default Aboutme;