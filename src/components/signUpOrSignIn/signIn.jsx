/* eslint-disable react/no-array-index-key */
import React from 'react';
import { shape, string, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommonTemplate from './commonTemplate';
import * as applicationActions from './actions';

const SignIn = (props) => {
    const {
        appUser: {
            userSignUpSIgnInFailureMessage,
            isUserRsgisteringOrLoggingInProgress
        },
        userLoginAction
    } = props;

    const onSignInButtonClick = (email, password) => {
        userLoginAction(email, password)
    }
    return (
        <CommonTemplate
            buttonText="Sign In"
            cardHeader="Sign In"
            onButtonClick={onSignInButtonClick}
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


SignIn.propTypes = {
    appUser: shape({
        userSignUpSIgnInFailureMessage: string,
        isUserRsgisteringOrLoggingInProgress: bool

    }).isRequired,
}

export default connect(mapStateToProps, mapDisptachToProps)(SignIn);