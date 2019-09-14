const hourOptions = {
  hour: '2-digit',
  timeZone: 'America/Sao_Paulo',
  hour12: false,
};
const minutesOptions = {
  minute: '2-digit',
  timeZone: 'America/Sao_Paulo',
  hour12: false,
};
const monthOptions = {
  month: '2-digit',
  timeZone: 'America/Sao_Paulo',
  hour12: false,
};
const monthShortNameOptions = {
  month: 'short',
  timeZone: 'America/Sao_Paulo',
};
const yearOptions = {
  year: '2-digit',
  timeZone: 'America/Sao_Paulo',
};
const currencyOptions = {
  style: 'currency',
  currency: 'BRL'
}
const decimalOptions = {
  style: 'decimal',
}

export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR');
export const { format: formatHour } = new Intl.DateTimeFormat('pt-BR', hourOptions);
export const { format: formatMinutes } = new Intl.DateTimeFormat('pt-BR', minutesOptions);
export const { format: formatMonth } = new Intl.DateTimeFormat('pt-BR', monthOptions);
export const { format: formatMonthShortName } = new Intl.DateTimeFormat('pt-BR', monthShortNameOptions);
export const { format: formatYear } = new Intl.DateTimeFormat('pt-BR', yearOptions);
export const { format: formatCurrency } = new Intl.NumberFormat('pt-BR', currencyOptions);
export const { format: formatDecimal } = new Intl.NumberFormat('pt-BR', decimalOptions);
