import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Tags from './views/Tags';
import Moneys from './views/Moneys';
import Statistics from './views/Statistics';
import NoMatch from './views/Nomatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
color: #333333;
`;

function App() {
    return (
        <AppWrapper>

            <Router>
                <Switch>
                    <Route path="/tags" exact={true}>
                        <Tags/>
                    </Route>
                    <Route path="/tags/:tag" exact={true}>
                        <Tag/>
                    </Route>
                    <Route path="/money">
                        <Moneys/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;
