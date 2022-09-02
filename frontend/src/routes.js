import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact element={ <Logon /> } />
                <Route path='/register' element={ <Register /> } />

                <Route path='/profile' element={ <Profile /> } />
                <Route path='/incidents/new' element={ <NewIncident /> } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;