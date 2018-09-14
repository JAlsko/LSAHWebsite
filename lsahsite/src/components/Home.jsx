import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <Image src="assets/header-2.jpg" className="header-image"/>
                    <div className="header-text">
                        <div className="main">Welcome</div>
                        <div className="secondary">to Longmont Small Animal Hospital</div>
                    </div>
                </div>
                {/*<Image src="assets/header-1.jpg" className="header-image"/>*/}
                {/*<Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/doctor1.jpg" className="about-profile-pic" circle/>
                        <h3>Frank the cat</h3>
                        <p>What a jerk, huh?</p>
                    </Col>
                </Grid>*/}
            </div>
        )
    }
}