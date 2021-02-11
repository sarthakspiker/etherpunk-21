import React, { Component } from 'react';
import { RMIUploader } from "react-multiple-image-uploader";

export default class RegisterProperty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flatType: "",
            furnishing: "",
            area: 0,
            address: "",
            availableFrom: "",
            rent: 0,
            deposit: 0,
            selectedFiles: []
        }
    }

    onFileSelection = (e) => {
        const allFiles = e.target.files;
        this.setState({ selectedFiles: [] });

        for (const property in allFiles) {
            if (typeof (allFiles[property]) !== 'object') continue;

            let file = allFiles[property];
            try {
                const reader = new FileReader();

                reader.readAsArrayBuffer(file);
                reader.onloadend = () => {
                    const newImage = {
                        file: file,
                        buffer: Buffer(reader.result)
                    }
                    this.setState({ selectedFiles: [...this.state.selectedFiles, newImage] });
                }
            } catch (error) {
                console.error('File Error');
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        const { selectedFiles } = this.state;

        return (
            <div className="jumbotron jumbotron-fluid bg-transparent m-0">
                <div className="container container-fluid p-5">
                    <header className="section-heading">
                        <h1 className="section-title text-center">Rent out...</h1>
                    </header>
                    <div className="row">
                        <div className="col-lg-7">
                            <form onSubmit={this.handleSubmit}>
                                <h3>
                                    <small className="text-muted">Property Details</small>
                                </h3>
                                <hr />
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputFirstName">Flat Type</label>
                                        <select id="inputBG" className="form-control"
                                            value={this.state.flatType} onChange={(e) => { this.setState({ flatType: e.target.value }) }}
                                        >
                                            <option value="" disabled></option>
                                            <option value="1RK">1 RK</option>
                                            <option value="1BHK">1 BHK</option>
                                            <option value="2BHK">2 BHK</option>
                                            <option value="3BHK">3 BHK</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputLastName">Furnishing</label>
                                        <select id="inputBG" className="form-control"
                                            value={this.state.furnishing} onChange={(e) => { this.setState({ furnishing: e.target.value }) }}
                                        >
                                            <option value="" disabled></option>
                                            <option value="FullyFurnished">Fully Furnished</option>
                                            <option value="SemiFurnished">Semi Furnished</option>
                                            <option value="None">None</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputUID">Address</label>
                                        <textarea type="text" className="form-control" rows="3" style={{ overflow: 'auto', resize: 'none' }}
                                            value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputGender">Area</label>
                                        <input type="number" min="0" className="form-control"
                                            value={this.state.area} onChange={(e) => { this.setState({ area: e.target.value }) }}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputDOB">Available From</label>
                                        <input type="date" className="form-control"
                                            value={this.state.availableFrom} onChange={(e) => { this.setState({ availableFrom: e.target.value }) }}
                                        />
                                    </div>
                                </div>

                                <h3>
                                    <small className="text-muted">Expenses</small>
                                </h3>
                                <hr />

                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputState">Rent</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Rs.</div>
                                            </div>
                                            <input type="number" min="0" className="form-control"
                                                value={this.state.rent} onChange={(e) => { this.setState({ rent: e.target.value }) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputCity">Security Deposit</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Rs.</div>
                                            </div>
                                            <input type="number" min="0" className="form-control"
                                                value={this.state.deposit} onChange={(e) => { this.setState({ deposit: e.target.value }) }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <h3>
                                    <small className="text-muted">Property Images</small>
                                </h3>
                                <hr />

                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputReportFile">Upload</label>
                                        <input type="file" className="form-control-file" multiple="multiple" accept="image/x-png,image/gif,image/jpeg"
                                            onChange={this.onFileSelection}
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            {
                                                selectedFiles.map((item, key) => {
                                                    return <img key={key} src={URL.createObjectURL(item.file)} alt="..." class="img-thumbnail img-thumbnail-custom rounded" />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label htmlFor="emptyLabel"></label>
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
