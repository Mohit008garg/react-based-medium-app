/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { shape, string, bool, func } from 'prop-types';
import { Container, Row, Col, Input, Form, FormGroup, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userSettingsAction from './shared/userSettingsAction';
import './shared/settings.css';
import Loader from '../Loader/loader';

const Settings = (props) => {
    const {
        settingsReducer: {
            isUserSetingsSavingInProgress,
            userSettingsSaveSuccessMessage,
            userSettingsSaveErrorMessage
        },
        user: {
            email,
            username,
            bio,
            image
        },
        saveSettings,
        logout
    } = props;
    const [profileUrl, setProfileUrl] = useState(image);
    const [userName, setUserName] = useState(username);
    const [shortBio, setShortBio] = useState(bio);
    const [updatedEmail, setEmail] = useState(email);
    const [password, setPassword] = useState('');
    return (
        <Form>
            <FormGroup>
                <Container className='settings-form'>
                    <Row>
                        <Col>
                            <Input value={profileUrl} type="text" name="pofileUrl" id="pofileUrl"
                                placeholder="Url of Profile Picture"
                                onChange={(e) => setProfileUrl(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input value={userName} type="text" name="userName" id="userName"
                                placeholder="User Name"
                                onChange={(e) => setUserName(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input value={shortBio} type="textarea" name="shortBio" id="shortBio"
                                placeholder="Short Bio About You"
                                onChange={(e) => setShortBio(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input value={updatedEmail} type="email" name="emailId" id="emailId"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input value={password} type="pasword" name="password" id="password"
                                placeholder="New Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>{
                        isUserSetingsSavingInProgress
                            ?
                            <Loader />
                            :
                            <Col sm="12" md={{ size: 6, offset: 3 }}><Button color="primary"
                                onClick={() => saveSettings(profileUrl, userName, shortBio, updatedEmail, password)
                                }>Update Settings</Button></Col>
                    }
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            {
                                userSettingsSaveErrorMessage !== "" &&
                                <p>{userSettingsSaveErrorMessage}</p>
                            }

                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            {
                                userSettingsSaveSuccessMessage !== "" &&
                                <p>{userSettingsSaveSuccessMessage}</p>
                            }

                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Button color="primary" onClick={() => logout()}>
                                LogOut
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </FormGroup >
        </Form>
    );
}


const mapDisptachToProps = dispatch => ({
    ...bindActionCreators(userSettingsAction, dispatch)
});

const mapStateToProps = (state) => {
    return ({
        settingsReducer: state.SettingsReducer,
        user: state.AppReducer.user
    })
}

Settings.propTypes = {
    settingsReducer: shape({
        userPostSaveErrorMessage: string,
        userPostSaveSuccessMessage: string,
        isUserPostSavingInProgress: bool

    }).isRequired,
    user: shape({
        email: string,
        username: string,
        bio: string,
        image: string

    }).isRequired,
    saveSettings: func.isRequired,
    logout: func.isRequired
}
export default connect(mapStateToProps, mapDisptachToProps)(Settings);