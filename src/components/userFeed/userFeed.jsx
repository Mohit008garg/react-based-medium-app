/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { shape, string, bool, arrayOf, Object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import FeedCard from '../feedCard/feedCard';
import * as userFeedActions from './shared/userFeedActions';
import Loader from '../Loader/loader';

const UserFeedComponent = (props) => {
    const {
        fetchFeed,
        userFeedProps: {
            articles,
            isUserFeedLoading,
            userArticlesLoadingErrorMessage
        }
    } = props;
    useEffect(() => {
        fetchFeed()
    }, [])

    const renderCards = () => {
        return (<Row>
            <Col sm="12">
                {
                    articles.map((article, index) => {
                        const { title, description, author } = article;
                        const { username, image } = author;
                        return (<FeedCard
                            authorName={username}
                            profileImage={image}
                            articleTitle={title}
                            articleDescription={description}
                        />)
                    }
                    )
                }
            </Col>
        </Row>)
    }

    const renderUserFeedComponent = () => {
        if (isUserFeedLoading) {
            return (<Loader />)
        } else if (userArticlesLoadingErrorMessage !== "") {
            return (<p>{userArticlesLoadingErrorMessage}</p>)
        }else if(articles.length === 0){
            const message = 'No Articles Found';
            return (<p>{message}</p>)
        } else {
            return renderCards()
        }
    }
    return (
        <>
            {
                renderUserFeedComponent()
            }
        </>
    );
}


const mapStateToProps = (state) => {
    return ({
        userFeedProps: state.UserFeedReducer,
    })
}
const mapDisptachToProps = dispatch => ({
    ...bindActionCreators(userFeedActions, dispatch)
});
UserFeedComponent.propTypes = {
    userFeedProps: shape({
        articles: arrayOf(Object),
        isUserFeedLoading: bool,
        userArticlesLoadingErrorMessage: string,

    }).isRequired,
}

export default connect(mapStateToProps, mapDisptachToProps)(UserFeedComponent);