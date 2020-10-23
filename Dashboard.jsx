import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login, Signup, ForgotPassword, ResetPassword } from '../Auth';
import { Project, Job } from '../Plan';
import { InviteUsers, Users } from "../User";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import { Menu, Dropdown } from 'semantic-ui-react';
import { clearStorage } from '../../utils';


function Dashboard (props){
    const [activeItem, setActiveItem] = useState("home");
    const handleItemClick = (e, { name }) => {
        setActiveItem({ activeItem: name });
    }
    const logout = () => {
        clearStorage();
        window.location = '/';
    }
    return (
        <Grid>
            <Router>
                <GridRow>
                    <GridColumn>
                        <Menu inverted size='huge'>
                            <Menu.Item>
                                <img src='/tugage-logo.png' alt="tugage logo" />
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Dropdown item text='Settings' position="right">
                                    <Dropdown.Menu position="right">
                                        <Dropdown.Header>Account Settings</Dropdown.Header>
                                        <Dropdown.Item name='settings'
                                            active={activeItem === 'settings'}
                                            onClick={handleItemClick}>
                                            Settings
                                </Dropdown.Item>
                                        <Dropdown.Item
                                            name='logout'
                                            active={activeItem === 'logout'}
                                            onClick={logout}>
                                            Logout
                                </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>
                        </Menu>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={3}>
                        <Menu vertical>
                            <Menu.Item>
                                <Menu.Header>Projects</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item
                                        as={Link} to='/dashboard/projects'
                                        name='projects'
                                        active={activeItem === 'projects'}
                                        onClick={handleItemClick}
                                    />
                                    <Menu.Item
                                        as={Link} to='/dashboard/jobs'
                                        name='jobs'
                                        active={activeItem === 'jobs'}
                                        onClick={handleItemClick}
                                    />
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>Integrations</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item
                                        name='components'
                                        active={activeItem === 'components'}
                                        onClick={handleItemClick} />
                                    <Menu.Item
                                        name='applications'
                                        active={activeItem === 'applications'}
                                        onClick={handleItemClick} />
                                    <Menu.Item
                                        name='services'
                                        active={activeItem === 'services'}
                                        onClick={handleItemClick} />
                                    <Menu.Item
                                        name='sources'
                                        active={activeItem === 'sources'}
                                        onClick={handleItemClick} />
                                    <Menu.Item
                                        name='targets'
                                        active={activeItem === 'targets'}
                                        onClick={handleItemClick} />
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>Users</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item
                                        as={Link} to='/dashboard/invite-users'
                                        name='invite-users'
                                        active={activeItem === 'invite-users'}
                                        onClick={handleItemClick} />
                                    <Menu.Item
                                        as={Link} to='/dashboard/manage-users'
                                        name='manage-users'
                                        active={activeItem === 'manage-users'}
                                        onClick={handleItemClick} />
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>Security</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item
                                        name='ssh'
                                        active={activeItem === 'ssh'}
                                        onClick={handleItemClick} />
                                    <Menu.Item
                                        name='keys'
                                        active={activeItem === 'keys'}
                                        onClick={handleItemClick} />
                                    <Menu.Item
                                        name='roles'
                                        active={activeItem === 'roles'}
                                        onClick={handleItemClick} />
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>Support</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item
                                        name='email'
                                        active={activeItem === 'email'}
                                        onClick={handleItemClick}>
                                        E-mail Support
                                    </Menu.Item>
                                    <Menu.Item
                                        name='faq'
                                        active={activeItem === 'faq'}
                                        onClick={handleItemClick}>
                                        FAQs
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Switch>
                            <Route path='/sign-in' component={Login} />
                            <Route path='/sign-up' component={Signup} />
                            <Route path='/forgot-password' component={ForgotPassword} />
                            <Route path='/reset-password' component={ResetPassword} />
                            <Route path='/dashboard/projects' component={Project} />
                            <Route path='/dashboard/jobs' component={Job} />
                            <Route path='/dashboard/manage-users' component={Users} />
                            <Route path='/dashboard/invite-users' component={InviteUsers} />
                        </Switch>
                    </GridColumn>
                </GridRow>
            </Router>
        </Grid>
    )
}

export default Dashboard;