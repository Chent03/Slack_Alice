import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button, Form } from 'semantic-ui-react';

import CustomSelection from '../../../UI/CustomSelection';

const renderEmployeeList = (list) => {
    let emp =  list.map(item => {
        return {
            text: item.FirstName + ' ' + item.LastName,
            value: item.ID,
            image: { avatar: true, src: item.Image}
        }
    })
    return (
        <Field 
            name="empID"
            placeholder="Visiting"
            options={emp}
            component={CustomSelection}
            />
    )
}

const FormTwo = ({handleSubmit, employeeList}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Segment>
                { employeeList ? renderEmployeeList(employeeList) : ''}
                <div style={{marginTop: "20px"}}>
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