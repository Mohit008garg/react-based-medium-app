/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Row, Col } from 'reactstrap';
import TagCardComponent from '../tagCard/tagCard';
import TabLayout from '../tabLayout/tabLayout';

const FeedContainer = () =>
    (
        <>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <TabLayout />
                </Col>
                <Col xs="3">
                    <TagCardComponent />
                </Col>
            </Row>
        </>
    );

export default FeedContainer;