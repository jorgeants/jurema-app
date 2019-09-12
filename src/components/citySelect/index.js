import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CitiesActions from '../../store/modules/cities/actions';

// import { Container } from './styles';

class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySelected: '',
    };
  }

  optionItem = (item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.nome}
      </option>
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
      <div>
        <select id="citySelected" value={citySelected} onChange={this.handleChangeCity}>
          {items.map(this.optionItem)}
        </select>
      </div>
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
