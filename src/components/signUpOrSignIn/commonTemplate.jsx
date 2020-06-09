/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { string, func, bool } from 'prop-types'
import Loader from '../Loader/loader';

const CommonTemplate = ({ showUserName, buttonText, cardHeader, onButtonClick, errorMesssage, displayLoader }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5 mx-auto mt-5 text-center">
                    <div className="card bg-light">
                        <div className="card-header">{cardHeader}</div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    showUserName &&
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                }

                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {
                                        displayLoader ?
                                            <Loader /> :
                                            <button className="btn btn-primary" onClick={() => onButtonClick(email, password, userName)}>{buttonText}</button>
                                    }
                                    {
                                        errorMesssage.length > 0 &&
                                        <div>Found error: {errorMesssage}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CommonTemplate.propTypes = {
    buttonText: string.isRequired,
    cardHeader: string.isRequired,
    onButtonClick: func.isRequired,
    errorMesssage: string.isRequired,
    displayLoader: bool.isRequired
}

CommonTemplate.defaultProps = {
    showUserName: false
}
export default CommonTemplate;