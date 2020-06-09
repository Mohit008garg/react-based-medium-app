/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { shape, string, bool, arrayOf, Object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import FeedCard from '../feedCard/feedCard';
import * as globalFeedActions from './shared/globalFeedActions';
import Loader from '../Loader/loader';

const GlobalFeedComponent = (props) => {
    const {
        fetchFeed,
        globalFeedProps: {
            articles,
            isGlobalArticlesLoading,
            globalArticlesLoadingErrorMessage
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

    const rendeGlobalArticleComponent = () => {
        if (isGlobalArticlesLoading) {
            return (<Loader />)
        } else if (globalArticlesLoadingErrorMessage !== "") {
            return (<p>{globalArticlesLoadingErrorMessage}</p>)
        } else {
            return renderCards()
        }
    }
    return (
        <>
            {
                rendeGlobalArticleComponent()
            }
        </>
    );
}


const mapStateToProps = (state) => {
    return ({
        globalFeedProps: state.GlobalFeedReducer,
    })
}
const mapDisptachToProps = dispatch => ({
    ...bindActionCreators(globalFeedActions, dispatch)
});
GlobalFeedComponent.propTypes = {
    globalFeedProps: shape({
        articles: arrayOf(Object),
        isGlobalArticlesLoading: bool,
        globalArticlesLoadingErrorMessage: string,

    }).isRequired,
}

export default connect(mapStateToProps, mapDisptachToProps)(GlobalFeedComponent);