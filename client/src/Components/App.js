import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './App.scss';
import Greetings from './Greetings/Greetings';
import MyCalendar from './Calendar/Calendar';
import Main from './Main/Main';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MyCalendar} />
                        <Route path="/check-in" component={Greetings} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;