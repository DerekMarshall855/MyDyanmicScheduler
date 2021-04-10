import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignupPage from '../pages/SignupPage';
import CalendarPage from '../pages/CalendarPage';
import ScheduleGeneratorPage from '../pages/ScheduleGeneratorPage';
import Logout from '../pages/Logout';
import EditCalendar from '../pages/EditCalendar';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const Main = () => {
    console.log(localStorage.getItem('auth'));
    return (
        <Switch>
            <PublicRoute restricted={false} component={Login} path='/' exact/>
            <PrivateRoute component={Home} path="/home" exact/>
            <PublicRoute restricted={false} component={SignupPage} path='/signuppage' exact/>
            <PrivateRoute component={CalendarPage} path="/calendar" exact/>
            <PrivateRoute component={Logout} path="/logout" exact/>
            <PrivateRoute component={ScheduleGeneratorPage} path="/generate-schedule" exact/>
            <PrivateRoute component={EditCalendar} path="/edit-calendar" exact/>
        </Switch>
    );
}



export default Main;