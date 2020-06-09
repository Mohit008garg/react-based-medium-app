/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { Settings, SignIn, SignUp, NEW_POST } from './constant';

const NavLinks = (props) => {
    const {
        navBarLinks,
        appUser: {
            isUserLoggedIn
        },
    } = props;
    return (
        navBarLinks.map((link) => {
            if ((link.title === SignUp || link.title === SignIn) && (isUserLoggedIn)) {
                return ({ ...link, shouldDisplayBeforeLogin: false })
            } else if ((link.title === Settings || link.title === NEW_POST) && (isUserLoggedIn)) {
                return ({ ...link, shouldDisplayBeforeLogin: true })
            }
            return link;
        }).filter(({ shouldDisplayBeforeLogin }) => shouldDisplayBeforeLogin).map((link, key) => {
            const { route, title } = link;
            return (
                <NavItem key={key}>
                    <NavLink exact activeClassName='active' tag={RRNavLink} className="navbar-bg"
                        to={route}>{title}</NavLink>
                </NavItem >
            );
        })

    );
}

NavLinks.defaultProps = {
    navLinks: []
}

const mapStateToProps = (state) => {
    return ({
        appUser: state.AppReducer.user,
    })
}

NavLinks.propTypes = {
    navBarLinks: arrayOf(
        shape({
            title: string,
        })
    ),
    appUser: shape({
        isUserLoggedIn: bool.isRequired
    }).isRequired

}

export default connect(mapStateToProps, () => { })(NavLinks);