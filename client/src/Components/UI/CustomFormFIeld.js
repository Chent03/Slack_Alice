import React from 'react';
import { Form } from 'semantic-ui-react';

const CustomFormField = ({placeholder}) => {
    return (
        <Form.Field>
            <input placeholder={placeholder}></input>
        </Form.Field>
    )
}

export default CustomFormField