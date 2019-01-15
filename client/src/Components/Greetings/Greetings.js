import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header} from 'semantic-ui-react'

import { fetchEmployeeList, postEmployeeMessage } from '../../store/actions';

import './Greetings.scss';
import FormOne from './WizardForm/FormOne/FormOne';
import FormTwo from './WizardForm/FormTwo/FormTwo';

class Greetings extends Component {
    componentDidMount() {
        const {fetchEmployeeList} = this.props;
        fetchEmployeeList();
    }

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
        const { firstName, lastName, empID } = this.props.wizard.values;
        this.props.postEmployeeMessage({
            firstName,
            lastName,
            empID
        })
    }
    render() {
        const {form} = this.state;
        const { employees } = this.props;
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
                        {form === 2 && <FormTwo handleSubmit={this.handleSubmit} employeeList={employees}/>}
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { employees, loading, loadingError } = state.slack;
    const { wizard } = state.form;
    return {
        employees,
        loading,
        loadingError,
        wizard
    }
}


export default connect(mapStateToProps, { fetchEmployeeList, postEmployeeMessage })(Greetings);
