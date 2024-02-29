const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const checkDateRange = (startDate, endDate) => {
  const currentDate = new Date();
  const tripStartDate = new Date(startDate);
  const tripEndDate = new Date(endDate);

  const tripStartWithinRange =
    tripStartDate >= currentDate && tripStartDate <= addDays(currentDate, 15);
  const tripEndWithinRange = tripEndDate >= currentDate && tripEndDate <= addDays(currentDate, 15);

  if (new Date(endDate) <= new Date(startDate)) {
    return 'End date should be after start date';
  }

  if (!tripStartWithinRange || !tripEndWithinRange) {
    return 'Trip start date and end date should be within the next 15 days';
  }

  return;
};

export default checkDateRange;
