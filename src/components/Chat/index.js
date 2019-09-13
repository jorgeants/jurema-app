import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSerialized: [],
    };
  }

  // componentDidMount() {
  //   this.serializeDataToChart();
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.dataProgram !== this.props.dataProgram) {
      this.serializeDataToChart();
    }
  }

  serializeDataToChart = () => {
    const { dataProgram } = this.props

    if (dataProgram) {
      const dataSerialized = dataProgram.map((node) => (
        {
          name: node.referenceDate,
          total: node.total,
          amountBeneficiaries: node.amountBeneficiaries,
        }
      ));

      this.setState({
        dataSerialized
      });
    }
  }

  render() {
    const { dataSerialized } = this.state

    return (
      <BarChart width={980} height={720} data={dataSerialized}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="total" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="amountBeneficiaries" fill="#82ca9d" />
      </BarChart>
    );
  }
}

const mapStateToProps = state => ({
  dataProgram: state.cities.dataProgram
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Chat);
