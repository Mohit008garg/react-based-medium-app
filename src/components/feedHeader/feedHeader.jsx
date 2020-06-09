/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { bool, shape } from 'prop-types';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import './feedHeader.css'

const FeedHeader = (props) => {
    const {
        appUser: {
            isUserLoggedIn
        },
    } = props;
    return (<>
        {
            isUserLoggedIn ? <></>
                : <Jumbotron >
                    <h1 className="display-3">Welcome to the world of knowledge!</h1>
                    <p className="lead">Place where we can spread the knowledge</p>
                </Jumbotron >
        }
    </>);
}

const mapStateToProps = (state) => {
    return ({
        appUser: state.AppReducer.user,
    })
}

FeedHeader.propTypes = {
    appUser: shape({
        isUserLoggedIn: bool.isRequired
    }).isRequired

}



export default connect(mapStateToProps, () => { })(FeedHeader);;