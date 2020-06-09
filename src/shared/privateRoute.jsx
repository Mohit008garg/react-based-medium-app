import React from 'react';
import { bool, func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthorised, ...rest }) => 
  (
    <Route
      {...rest}
      render={(props) =>
        isAuthorised ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/notAuthorised'
            }}
          />
        )
      }
    />
  );


PrivateRoute.propTypes = {
  component: func.isRequired,
  isAuthorised: bool
};

PrivateRoute.defaultProps = {
  isAuthorised: false
};

export default PrivateRoute;
