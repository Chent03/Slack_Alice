import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button, Form } from 'semantic-ui-react';

import CustomSelection from '../../../UI/CustomSelection';

const Friends = [
    {
        text: 'tony',
        value: 'tony'
    },
    {
        text: 'joey',
        value: 'joey'
    },
    {
        text: 'calvin',
        value: 'calvin'
    }
]

const FormTwo = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Segment>
                <Field 
                    name="visiting"
                    placeholder="Visiting"
                    options={Friends}
                    component={CustomSelection}
                />
                <div>
                    <Button>Submit</Button>
                </div>
            </Segment>
        </Form>
    )
}

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(FormTwo);