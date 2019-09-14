import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CitiesActions from '../../store/modules/cities/actions';

import { WrapperSelect, SelectItemsLabel, SelectItems, SelectItemsOption } from './styles';

class StateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateSelected: '',
    };
  }

  optionItem = (item) => {
    return (
      <SelectItemsOption key={item.id} value={item.id}>
        {`${item.sigla} - ${item.nome}`}
      </SelectItemsOption>
    );
  }

  handleChangeState = (event) => {
    const { loadCitiesRequest } = this.props

    this.setState({ stateSelected: event.target.value });

    loadCitiesRequest(event.target.value);
  }

  render() {
    const { items } = this.props
    const { stateSelected } = this.state;

    return (
      <WrapperSelect>
        <SelectItemsLabel>
          Estado
        </SelectItemsLabel>
        <SelectItems id="stateSelect" value={stateSelected} onChange={this.handleChangeState}>
          {items.map(this.optionItem)}
        </SelectItems>
      </WrapperSelect>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CitiesActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(StateSelect);
