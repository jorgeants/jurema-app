import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as StatesActions from '../../store/modules/states/actions';

import StateSelect from '../../components/StateSelect';
import CitySelect from '../../components/CitySelect';
import Chart from '../../components/Chat';

import {
	Wrapper,
	Header,
	Title,
	Instructions,
	Filter,
	ContainerChart,
	EmptyMessageWrapper,
	EmptyMessage
} from './styles';

class Report extends Component {
	componentDidMount() {
		const { loadStatesRequest } = this.props

		loadStatesRequest();
	}

	emptyMessage = () => {
		return (
			<EmptyMessageWrapper>
				<EmptyMessage>Nenhuma informação para ser exibida</EmptyMessage>
			</EmptyMessageWrapper>
		);
	}

	render() {
		const { states, cities, dataProgram, dataProgramLoading } = this.props;

		return (
			<Wrapper>
				<Header>
					<Title>Relatório de beneficiários do Programa Bolsa Família</Title>
					<Instructions>Selecione o estado e a cidade para obter os dados</Instructions>
				</Header>
				<Filter>
					<StateSelect items={states} />
					<CitySelect items={cities} />
				</Filter>
				<ContainerChart>
					{(dataProgramLoading || dataProgram.length !== 0) ? <Chart /> : this.emptyMessage()}
				</ContainerChart>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => ({
	states: state.states.data,
	loading: state.states.loading,
	error: state.states.error,
	errorMessage: state.states.errorMessage,
	cities: state.cities.data,
	dataProgram: state.cities.dataProgram,
	dataProgramLoading: state.cities.dataProgramLoading,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(StatesActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Report);
