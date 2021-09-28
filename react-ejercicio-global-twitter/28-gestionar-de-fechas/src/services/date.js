const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const getCurrentDate = () => {
  // Más info en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();
  return `${day} ${month}. ${year}`;
};

const objToExport = {
  getCurrentDate: getCurrentDate
};

export default objToExport;
