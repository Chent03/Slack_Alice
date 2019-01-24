import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import { fetchEmployeeList } from '../../store/actions';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomSelection from '../UI/CustomSelection';

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

class MyCalendar extends Component{
    componentDidMount() {
        this.props.fetchEmployeeList();
    }
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    renderEmployeeList = (list) => {
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

    render() {
        const {employees } = this.props;
        return(
            <div>
                <div style={{height: 500}}>
                    <BigCalendar
                    localizer={localizer}
                    events={[]}
                    defaultView={['week']}
                    startAccessor="start"
                    endAccessor="end"
                    />
                </div> 
                {employees.length ? this.renderEmployeeList(employees) : ''}
            </div>
           
        )
    }
}


const mapStateToProps = (state) => {
    const { employees, loading, loadingError } = state.slack;
    return {
        employees,
        loading,
        loadingError
    }
}

MyCalendar = connect(mapStateToProps, { fetchEmployeeList })(MyCalendar);

export default reduxForm({
    form: 'calendar',
    forceUnregisterOnUnmount: true
})(MyCalendar);