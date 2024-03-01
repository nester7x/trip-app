function formatWeekDay(inputDate) {
  if (!inputDate) return '';

  const parsedDate = new Date(inputDate);

  return parsedDate.toLocaleDateString('en-Us', { weekday: 'long' });
}

function formatDayMonthYear(inputDate) {
  if (!inputDate) return '';
  const parsedDate = new Date(inputDate);

  const dayOfMonth = String(parsedDate.getDate()).padStart(2, '0');
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const year = String(parsedDate.getFullYear());

  return `${dayOfMonth}.${month}.${year}`;
}

function formatYearMonthDay(inputDate) {
  if (!inputDate) return '';
  const parsedDate = new Date(inputDate);

  const dayOfMonth = String(parsedDate.getDate()).padStart(2, '0');
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const year = String(parsedDate.getFullYear());

  return `${year}-${month}-${dayOfMonth}`;
}

export { formatWeekDay, formatDayMonthYear, formatYearMonthDay };
