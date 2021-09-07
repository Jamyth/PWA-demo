import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { V1 } from './V1';
import { V2 } from './V2';
import './index.less';

export const Main = React.memo(() => {
    return (
        <Switch>
            <Route exact component={V1} path="/v1" />
            <Route exact component={V2} path="/v2" />
            <Redirect to="/v1" />
        </Switch>
    );
});
