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

export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR');
export const { format: formatHour } = new Intl.DateTimeFormat('pt-BR', hourOptions);
export const { format: formatMinutes } = new Intl.DateTimeFormat('pt-BR', minutesOptions);
export const { format: formatMonth } = new Intl.DateTimeFormat('pt-BR', monthOptions);
