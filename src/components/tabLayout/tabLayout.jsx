/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { bool, shape } from 'prop-types';
import { NavItem, NavLink, TabContent, TabPane, Nav, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { TAB_ARRAY } from './constant';


const TabLayout = (props) => {
    const {
        appUser: {
            isUserLoggedIn
        },
    } = props;
    const [activeTab, setActiveTab] = useState('1');
    useEffect(() => {
        
    }, [isUserLoggedIn]);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const renderTabs = () => TAB_ARRAY.filter(({ shouldRenderTab }) => shouldRenderTab || isUserLoggedIn).map(({ tabName, tabId }) => {
        return (
            <NavItem>
                <NavLink className={activeTab === tabId ? 'active' : ''}
                    onClick={() => toggle(tabId)}>
                    {tabName}
                </NavLink>
            </NavItem>
        );
    })

    const renderTabConent = () => {
        return (
            <TabContent activeTab={activeTab}>
                {
                    TAB_ARRAY.filter(({ shouldRenderTab }) => shouldRenderTab || isUserLoggedIn).map(({ TabContent, tabId }) => {
                        return (<TabPane tabId={tabId}>
                            <Row>
                                <Col sm="12">
                                    <h4><TabContent /></h4>
                                </Col>
                            </Row>
                        </TabPane>)
                    })
                }
            </TabContent>
        );
    }

    return (
        <div>
            <Nav tabs>
                {
                    renderTabs()
                }
            </Nav>
            {
                renderTabConent()
            }


        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        appUser: state.AppReducer.user,
    })
}
TabLayout.propTypes = {
    appUser: shape({
        isUserLoggedIn: bool.isRequired
    }).isRequired

}
export default connect(mapStateToProps, () => { })(TabLayout);