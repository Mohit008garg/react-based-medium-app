/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    CardLink
} from 'reactstrap';
import './feedCard.css';
import DefaultProfileImage from '../../assets/img/default_profile.png';

const FeedCard = ({ authorName, authoorDate, profileImage, articleTitle, articleDescription }) =>
    (

        <Card>
            <CardBody className="tag-heart">
                <CardText><i className="fa fa-heart" aria-hidden="true"></i></CardText>
            </CardBody>
            <CardBody>
                <img top width="10%" height="10%" src={profileImage} alt="Card image cap" />
                <CardTitle>{authorName}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>

            <CardBody>
                <CardText>{articleTitle}</CardText>
                <CardLink href="#">{articleDescription}</CardLink>
            </CardBody>
        </Card>

    );


FeedCard.defaultProps = {
    profileImage: DefaultProfileImage
}
export default FeedCard;