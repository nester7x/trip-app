function formatWeekDay(inputDate) {
  if (!inputDate) return '';

  const parsedDate = new Date(inputDate);

  return parsedDate.toLocaleDateString('en-Us', { weekday: 'long' });
}

function formatMonthDayYear(inputDate) {
  if (!inputDate) return '';
  const parsedDate = new Date(inputDate);

  const dayOfMonth = String(parsedDate.getDate()).padStart(2, '0');
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const year = String(parsedDate.getFullYear());

  return `${month} ${dayOfMonth} ${year}`;
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
  const parts = inputDate.split(' ');

  return (
    parts[2] +
    '-' +
    (parts[0].length === 1 ? '0' + parts[0] : parts[0]) +
    '-' +
    (parts[1].length === 1 ? '0' + parts[1] : parts[1])
  );
}

export { formatWeekDay, formatMonthDayYear, formatDayMonthYear, formatYearMonthDay };
