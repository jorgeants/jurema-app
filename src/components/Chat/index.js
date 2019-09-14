import React, { Component } from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { connect } from 'react-redux';

import { formatMonthShortName, formatYear, formatDecimal } from '../../util/format';

import { theme } from '../../theme/globalStyle';
import { LoadingMessageWrapper, LoadingMessage } from './styles';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSerialized: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dataProgram !== this.props.dataProgram) {
      this.serializeDataToChart();
    }
  }

  parseToMonthShortNameAndYear = (referenceDate) => {
    const date = new Date(referenceDate.split('/').reverse().join(","));
    return `${formatMonthShortName(date)}/${formatYear(date)}`
  }

  serializeDataToChart = () => {
    const { dataProgram } = this.props

    if (dataProgram) {
      const dataSerialized = dataProgram.map((node) => (
        {
          month: this.parseToMonthShortNameAndYear(node.referenceDate),
          total: node.total,
          amountBeneficiaries: node.amountBeneficiaries,
        }
      ));

      this.setState({
        dataSerialized
      });
    }
  }

  loadingMessage = () => {
    return (
      <LoadingMessageWrapper>
        <LoadingMessage>
          Carregando os dados
        </LoadingMessage>
      </LoadingMessageWrapper>
    )
  }

  render() {
    const { dataSerialized } = this.state
    const { dataProgramLoading } = this.props

    return (
      dataProgramLoading ? this.loadingMessage() : <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataSerialized}
          margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" stroke={theme.primary} />
          <YAxis yAxisId="right" orientation="right" stroke={theme.gray} />
          <Tooltip dataKey="total" formatter={(value) => formatDecimal(value)} />
          <Legend />
          <Bar name="Total (R$)" yAxisId="left" dataKey="total" fill={theme.primary} />
          <Bar name="Beneficiários (un)" yAxisId="right" dataKey="amountBeneficiaries" fill={theme.gray} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => ({
  dataProgram: state.cities.dataProgram,
  dataProgramLoading: state.cities.dataProgramLoading
});

export default connect(
  mapStateToProps,
  null
)(Chat);
