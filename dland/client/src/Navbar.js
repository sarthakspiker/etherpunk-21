import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-light shadow-lg rounded bg-light"
            >
                {/* <a className="navbar-brand navbar-nav" href="/">
                    <h2>
                        Home
                    </h2>
                </a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a className="nav-link" href="/"><h3>Dashboard</h3></a>
                        </li>
                        <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a className="nav-link" href="/property"><h3>Rent Out</h3></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
