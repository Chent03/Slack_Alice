import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Button, Form, Segment } from 'semantic-ui-react';

import CustomFormField from '../../../UI/CustomFormFIeld';

const FormOne = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Segment stacked>
                <Field
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    component={CustomFormField}
                />
                <Field
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    component={CustomFormField}
                />
                <div>
                    <Button type="submit">Next</Button>
                </div>
            </Segment>
        </Form>
    )
}

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(FormOne)