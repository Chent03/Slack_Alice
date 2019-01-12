import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const CustomSelection = ({placeholder, options}) => (

    <Dropdown 
        placeholder={placeholder}
        fluid
        options={options}
    />
)

export default CustomSelection;