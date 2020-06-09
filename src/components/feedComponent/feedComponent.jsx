/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import FeedHeader from '../feedHeader/feedHeader';
import FeedContainer from './feedContainer';

const FeedComponent = () =>
    (
        <>
            <FeedHeader />
            <FeedContainer/>
        </>
    );

export default FeedComponent;