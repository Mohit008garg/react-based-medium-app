/* eslint-disable react/no-array-index-key */
import React from 'react';
import { shape, string, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as applicationActions from './actions';
import CommonTemplate from './commonTemplate';


const SignUp = (props) => {
    const {
        appUser: {
            userSignUpSIgnInFailureMessage,
            isUserRsgisteringOrLoggingInProgress
        },
        userRegisterAction
    } = props;

    const onSignUpButtonClick = (email, password, username) => {
        userRegisterAction(username, email, password)
    }
    return (
        <CommonTemplate showUserName
            buttonText="Sign Up" cardHeader="Sign Up" onButtonClick={onSignUpButtonClick}
            errorMesssage={userSignUpSIgnInFailureMessage}
            displayLoader={isUserRsgisteringOrLoggingInProgress} />
    );
}

const mapDisptachToProps = dispatch => ({
    ...bindActionCreators(applicationActions, dispatch)
});

const mapStateToProps = (state) => {
    return ({
        appUser: state.AppReducer.user,
    })
}
SignUp.propTypes = {
    appUser: shape({
        userSignUpSIgnInFailureMessage: string,
        isUserRsgisteringOrLoggingInProgress: bool
    }).isRequired,
}

export default connect(mapStateToProps, mapDisptachToProps)(SignUp);