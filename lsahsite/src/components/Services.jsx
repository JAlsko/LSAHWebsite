import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Services.css';

export default class Services extends Component {
    render() {
        return (
            <div>
                {/* <Image src="assets/header-1.jpg" className="header-image"/> */}
                <Grid>
                    <Col xs={12} sm={4} smOffset={1}>
                        <Image src="assets/doctor1.jpg" className="about-profile-pic" circle/>
                        <h3>Frank the cat</h3>
                        <p>What a jerk, huh?</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}