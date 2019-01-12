import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import Greetings from './Greetings/Greetings';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Greetings} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;