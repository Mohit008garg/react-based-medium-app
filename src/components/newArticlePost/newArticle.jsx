/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { shape, string, bool } from 'prop-types';
import { Container, Row, Col, Input, Form, FormGroup, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newArticlePostAction from './shared/newArticlePostAction';
import './shared/newArtilce.css'
import Loader from '../Loader/loader';

const NewArticle = (props) => {
    const {
        articlePostReducer: {
            articlePostSubmitErrorMessage,
            articlePostSubmitSuccessMessage,
            isArticlePostSubmitting
        },
        postArticle
    } = props;
    const [title, setTitle] = useState('');
    const [articleSummary, setArticleSummary] = useState('');
    const [artilceDescription, setArtilceDescription] = useState('');
    const [tags, setTags] = useState('');
    return (<Form>
        <FormGroup>
            <Container className='new-artile-form'>
                <Row>
                    <Col>
                        <Input type="text" name="title" id="title" value={title} placeholder="Article Title"
                            onChange={((e) => setTitle(e.target.value))}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input value={articleSummary} type="text" name="titleShortDesc" id="titleShortDesc" placeholder="What's the title about?"
                            onChange={((e) => setArticleSummary(e.target.value))}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input value={artilceDescription} type="textarea" name="artilce" id="artilce" placeholder="Write your article"
                            onChange={((e) => setArtilceDescription(e.target.value))}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input value={tags} type="text" name="artilceTags" id="artilceTags" placeholder="Tags can be entered comma seperated"
                            onChange={((e) => setTags(e.target.value))}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        {
                            isArticlePostSubmitting
                                ? <Loader />
                                : <Button color="primary" onClick={() => postArticle(title, articleSummary, artilceDescription, tags)}>Publish Artilce</Button>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        {
                            articlePostSubmitErrorMessage !== "" &&
                            <p>{articlePostSubmitErrorMessage}</p>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        {
                            articlePostSubmitSuccessMessage !== "" && 
                            <p>{ articlePostSubmitSuccessMessage }</p>
                        }

                    </Col>
                </Row>
            </Container>
        </FormGroup >
    </Form>
    );
}

const mapDisptachToProps = dispatch => ({
    ...bindActionCreators(newArticlePostAction, dispatch)
});

const mapStateToProps = (state) => {
    return ({
        articlePostReducer: state.ArticlePostReducer,
    })
}

NewArticle.propTypes = {
    articlePostReducer: shape({
        articlePostSubmitErrorMessage: string,
        articlePostSubmitSuccessMessage: string,
        isArticlePostSubmitting: bool

    }).isRequired,
}


export default connect(mapStateToProps, mapDisptachToProps)(NewArticle);