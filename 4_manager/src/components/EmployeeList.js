import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch();
    }

    renderItem(employee) {
		return <ListItem employee={employee} />;
	}
	render() {
		return (
			<FlatList
				data={this.props.employees}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(employee, index) => index.toString()}
			/>
		);
	}
}
 
const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
 
    return { employees }
};
 
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);