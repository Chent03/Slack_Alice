import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Button, Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import CustomSelection from '../../../UI/CustomSelection';

import "react-datepicker/dist/react-datepicker.css";


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

const FormTwo = ({handleSubmit, employeeList, handleTimechange, timeState}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Segment>
                { employeeList ? renderEmployeeList(employeeList) : ''}
                <DatePicker 
                    selected={timeState}
                    onChange={handleTimechange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                />
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