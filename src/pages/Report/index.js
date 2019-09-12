import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as StatesActions from '../../store/modules/states/actions';

import StateSelect from '../../components/StateSelect';
import CitySelect from '../../components/CitySelect';

// import { Container } from './styles';

class Report extends Component {
	componentDidMount() {
		const { loadStatesRequest } = this.props

		loadStatesRequest();
	}

	render() {
		const { states, cities } = this.props;

		return (
			<div>
				<h1>Report</h1>
				<StateSelect items={states} />
				<CitySelect items={cities} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	states: state.states.data,
	loading: state.states.loading,
	error: state.states.error,
	errorMessage: state.states.errorMessage,
	cities: state.cities.data,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(StatesActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Report);
