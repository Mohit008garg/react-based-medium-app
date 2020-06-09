/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import './loader.css';
import { Spinner } from 'reactstrap';

const Loader = ({ size }) =>
    (
        <Spinner size={size} color="primary" />
    );

Loader.defaultProps = {
    size: 'sm'
}
export default Loader;