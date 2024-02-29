const isOverlapping = (tripCards, startDate, endDate) => {
  return tripCards.some((trip) => {
    const tripStartDate = new Date(trip.bookedDate.split(' - ')[0]);
    const tripEndDate = new Date(trip.bookedDate.split(' - ')[1]);

    return (
      (startDate >= tripStartDate && startDate <= tripEndDate) ||
      (endDate >= tripStartDate && endDate <= tripEndDate)
    );
  });
};

export default isOverlapping;
