const isOverlapping = (tripCards, startDate, endDate) => {
  if (
    tripCards.some((trip) => {
      const tripStartDate = new Date(trip.startDate);
      const tripEndDate = new Date(trip.endDate);

      return (
        (startDate >= tripStartDate && startDate <= tripEndDate) ||
        (endDate >= tripStartDate && endDate <= tripEndDate) ||
        (startDate <= tripStartDate && endDate >= tripEndDate)
      );
    })
  ) {
    return 'You already have a trip booked for this time';
  }
};

export default isOverlapping;
