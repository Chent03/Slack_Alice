import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import './Greetings.scss';
import FormOne from './WizardForm/FormOne/FormOne';
import FormTwo from './WizardForm/FormTwo/FormTwo';

class Greetings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: 1
        }
    }

    nextForm = () => {
        this.setState({form: this.state.form + 1})
    }
    
    previousForm = () => {
        this.setState({form: this.state.form - 1})
    }

    handleSubmit = () => {
        console.log('submitting');
    }
    render() {
        const {form} = this.state;
        return (
            <div className='login-form'>
                <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                    height: 100%;
                }
                `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                    Please Sign In
                    </Header>
                        {form === 1 && <FormOne handleSubmit={this.nextForm} />}
                        {form === 2 && <FormTwo handleSubmit={this.handleSubmit} />}
                    <Message>
                    New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Greetings;
