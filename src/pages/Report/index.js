import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as StatesActions from '../../store/modules/states/actions';

// import { Container } from './styles';

class Report extends Component {
	componentDidMount() {
		const { loadStatesRequest } = this.props

		loadStatesRequest();
	}

	render() {
		const { states } = this.props;

		return (
			<div>
				<h1>Report</h1>
				{states.map((restaurant) => (
					<span key={restaurant.id} style={{ display: "block" }}>
						{restaurant.name}
					</span>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	states: state.states.data,
	loading: state.states.loading,
	error: state.states.error,
	errorMessage: state.states.errorMessage,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(StatesActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Report);
