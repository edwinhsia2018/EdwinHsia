import React from "react";
import './Main.css';
import Avatar from '../../components/Avatar/Avatar';
import NavButton from "../../components/NavButton/NavButton";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Main({ location }) {

    return (
        <Wrapper>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={'fade'}
                >
                    <div>
                        <div className="parallax">
                            <div id="main-container">
                                <NavButton />
                                <div>
                                    <div>
                                        <Avatar id="avatar-container" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

export default Main;