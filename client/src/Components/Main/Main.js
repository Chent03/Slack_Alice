import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';

import './Main.scss';

const Main = () => {
    return (
        <Grid 
            style={{height: "100vh"}}
            verticalAlign={"middle"}
            centered={true}
            container 
            columns={1} 
        >
            <Grid.Column
                verticalAlign={"middle"}
            >
                <Button.Group>
                    <Link to="/check-in">
                        <Button>Sign In</Button>
                    </Link>
                    <Button.Or/>
                    <Link to="/schedule">
                        <Button>Make Appointment</Button>
                    </Link>
                </Button.Group>
            </Grid.Column>
        </Grid>
    )
}

export default Main;
