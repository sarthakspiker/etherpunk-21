import React, { Component } from 'react';
import IPFS from 'ipfs-http-client';
import config from './config.json';
import Property from './PropertyCard';

export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const client = new IPFS({
            host: config.ipfsEndpoint,
            port: config.ipfsPort,
            protocol: config.ipfsSecurityProtocol
        });
    }

    render() {
        return (
            <div className="Dashboard">
                <div className="jumbotron jumbotron-fluid bg-transparent m-0">
                    <div className="container container-fluid p-5">
                        <header className="section-heading">
                            <h1 className="section-title text-center">Catalog</h1>
                        </header>
                        <div className="container container-fluid p-5">
                            <div className="list-group mx-auto">
                                <Property />
                                <Property />
                                <Property />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
