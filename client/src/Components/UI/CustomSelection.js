import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const CustomSelection = ({placeholder, options, input}) => (

    <Dropdown 
        placeholder={placeholder}
        fluid
        {...input}
        value={input.value}
        onChange={(param, data) => input.onChange(data.value)}
        selection
        options={options}
    />
)

export default CustomSelection;