import React from 'react';
import { Form } from 'semantic-ui-react';

const CustomFormField = ({placeholder, input, type}) => {
    return (
        <Form.Field>
            <input {...input} placeholder={placeholder} type={type}></input>
        </Form.Field>
    )
}

export default CustomFormField