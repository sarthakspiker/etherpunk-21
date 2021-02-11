import React, { Component } from 'react';


export default class PropertyCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Property w-100 p-2">
                <div className="card card-product-list bg-light mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-3 p-3 align-middle">
                            <img src={'https://5.imimg.com/data5/VA/XX/GV/GLADMIN-46813453/3-bhk-flats-in-patna-840x480-500x500.jpg'} className="img-thumbnail" alt="..." />
                        </div>
                        <div className="col-md-6 p-2">
                            <div className="info-main">
                                <div className="h3 title property-title"> {'3BHK'} - {'Fully Furnished'} </div>
                                <dl className="row property-description">
                                    <dt className="col-sm-3">Address</dt>
                                    <dd className="col-sm-9">{'3500 Deer Creek Road Palo Alto, CA 94304'}</dd>

                                    <dt className="col-sm-3">Area</dt>
                                    <dd className="col-sm-9">{'12345'} sqft.</dd>

                                    <dt className="col-sm-3">Schedule Visit</dt>
                                    <dd className="col-sm-9"><a href="tel:8507783427" className="text-decoration-none link-info">{'8507783427'}</a></dd>
                                </dl>
                            </div>
                        </div>
                        <div className="col-sm-3 p-2">
                            <div className="info-aside">
                                <div className="price-wrap">
                                    <span className="rent h5 text-end">Rent: {'$56'} </span>
                                    <br />
                                    <span className="rent h5">Security: {'$1000'} </span>
                                </div>
                                <br />
                                <p>
                                    <a href="#" className="btn btn-primary btn-block"> Details </a>
                                </p>
                                <p>
                                    Available from: <span className="rent h6"> {'Today'} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
