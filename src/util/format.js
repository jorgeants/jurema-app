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

export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR');
export const { format: hour } = new Intl.DateTimeFormat('pt-BR', hourOptions);
export const { format: minutes } = new Intl.DateTimeFormat('pt-BR', minutesOptions);
