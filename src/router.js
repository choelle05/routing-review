import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Roster from './components/Roster';
import Schedule from './components/Schedule';
import TeamA from './components/TeamA';
import TeamB from './components/TeamB';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} />
        {/* <Route path='/schedule' render={() =>  (
            <Schedule>
                <Switch>
                    <Route path='/schedule/teama' component={TeamA} />
                    <Route path='/schedule/teamb' component={TeamB} />
                </Switch>
            </Schedule>
            )} /> */}
    </Switch>
)