import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CitiesActions from '../../store/modules/cities/actions';

import { WrapperSelect, SelectItemsLabel, SelectItems, SelectItemsOption } from './styles';

class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySelected: '',
    };
  }

  optionItem = (item) => {
    return (
      <SelectItemsOption key={item.id} value={item.id}>
        {item.nome}
      </SelectItemsOption>
    );
  }

  handleChangeCity = (event) => {
    const { loadDataProgramRequest } = this.props

    this.setState({ citySelected: event.target.value });

    loadDataProgramRequest(event.target.value);
  }

  render() {
    const { items } = this.props
    const { citySelected } = this.state;

    return (
      <WrapperSelect>
        <SelectItemsLabel>
          Cidade
        </SelectItemsLabel>
        <SelectItems id="citySelected" value={citySelected} onChange={this.handleChangeCity}>
          {items.map(this.optionItem)}
        </SelectItems>
      </WrapperSelect>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities.data,
  loading: state.cities.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CitiesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitySelect);
