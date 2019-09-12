import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CitiesActions from '../../store/modules/cities/actions';

// import { Container } from './styles';

class StateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateSelected: '',
    };
  }

  optionItem = (item) => {
    return (
      <option key={item.id} value={item.id}>
        {`${item.sigla} - ${item.nome}`}
      </option>
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
      <div>
        <select id="stateSelect" value={stateSelected} onChange={this.handleChangeState}>
          {items.map(this.optionItem)}
        </select>
      </div>
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
