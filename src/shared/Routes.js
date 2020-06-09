import React, { Suspense } from 'react';
import { bool } from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from '../components/notFound/notFound';
import NotAuthorisedPage from '../components/notAuthorized/notAuthorized';
import Loader from '../components/Loader/loader';
import PrivateRoute from './privateRoute';
import signUp from '../components/signUpOrSignIn/signUp';
import signIn from '../components/signUpOrSignIn/signIn';
import FeedComponent from '../components/feedComponent/feedComponent';
import NewArticle from '../components/newArticlePost/newArticle';
import Settings from '../components/settings/settings';

const Routes = ({ isAuthorised }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <PrivateRoute exact path="/" component={FeedComponent} isAuthorised={true} />
                <PrivateRoute exact path="/signup" component={signUp} isAuthorised={true}/>
                <PrivateRoute exact path="/signin" component={signIn} isAuthorised={true}/>
                <PrivateRoute exact path="/newarticle" component={NewArticle} isAuthorised={true}/>
                <PrivateRoute exact path="/settings" component={Settings} isAuthorised={true}/>
                <Route exact path="/notFound" component={NotFoundPage} />
                <Route exact path="/notAuthorised" component={NotAuthorisedPage} />
                {!isAuthorised ? <Redirect to="/notAuthorised" /> : <Redirect to="/" />}
            </Switch>
        </Suspense>
    );
}

Routes.propTypes = {
    isAuthorised: bool.isRequired
}

export default Routes;