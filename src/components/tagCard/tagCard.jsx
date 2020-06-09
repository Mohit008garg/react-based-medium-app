/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { shape, string, bool, arrayOf } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Badge, Col, Row } from 'reactstrap';
import * as tagCardActions from './shared/tagCardActions';
import Loader from '../Loader/loader';
import './tagCard.css';

const TagCardComponent = (props) => {
    const {
        fetchTags,
        tagProps: {
            tags,
            isTagLoading,
            tagLoadingErrorMessage
        }
    } = props;

    const renderTags = () => {
        return (<Row className="tag-card-block">
            <Col>Poupular Tags</Col>
            <Row>
                <Col xs="auto">
                    {
                        tags.sort().map((tag, index) => <Badge key={index} href="#" color="primary" pill>{tag}</Badge>)
                    }
                </Col>
            </Row>
        </Row>)
    }

    const renderTagComponent = () => {
        if (isTagLoading) {
            return (<Loader />)
        } else if (tagLoadingErrorMessage !== "") {
            return (<p>{tagLoadingErrorMessage}</p>)
        } else {
            return renderTags()
        }
    }
    useEffect(() => {
        fetchTags()
    }, [])

    return (
        <>
            {
                renderTagComponent()
            }
        </>
    );

}
const mapStateToProps = (state) => {
    return ({
        tagProps: state.TagReducer,
    })
}
const mapDisptachToProps = dispatch => ({
    ...bindActionCreators(tagCardActions, dispatch)
});
TagCardComponent.propTypes = {
    tagProps: shape({
        tags: arrayOf(string),
        isTagLoading: bool,
        tagLoadingErrorMessage: string,

    }).isRequired,
}
export default connect(mapStateToProps, mapDisptachToProps)(TagCardComponent);