import Reservation from "../models/reservation.js";

// Add a new reservation
export const addR = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { startAt, numGuests, notes } = req.body;

    const reservation = new Reservation({
      customerId: id,
      startAt: new Date(startAt),
      numGuests,
      notes,
    });
    await reservation.save();

    return res.redirect(`/${id}/`);
  } catch (err) {
    return next(err);
  }
};
export default Reservation;
