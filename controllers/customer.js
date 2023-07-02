import Customer from "../models/customer.js";

// Get all customers
export const getAll = async (req, res, next) => {
  try {
    const customers = await Customer.all();
    return res.render("customer_list.html", { customers });
  } catch (err) {
    return next(err);
  }
};

// Show form to add a new customer
export const showAddForm = async (req, res, next) => {
  try {
    return res.render("customer_new_form.html");
  } catch (err) {
    return next(err);
  }
};

// Add a new customer
export const add = async (req, res, next) => {
  try {
    const { firstName, lastName, phone, notes } = req.body;

    const customer = new Customer({ firstName, lastName, phone, notes });
    await customer.save();

    return res.redirect(`/${customer.id}/`);
  } catch (err) {
    return next(err);
  }
};

// Get a customer by ID
export const getById = async (req, res, next) => {
  try {
    const customer = await Customer.get(req.params.id);

    const reservations = await customer.getReservations();

    return res.render("customer_detail.html", { customer, reservations });
  } catch (err) {
    return next(err);
  }
};

// Show form to edit a customer
export const showEditForm = async (req, res, next) => {
  try {
    const customer = await Customer.get(req.params.id);

    res.render("customer_edit_form.html", { customer });
  } catch (err) {
    return next(err);
  }
};

// Edit a customer
export const edit = async (req, res, next) => {
  try {
    const customer = await Customer.get(req.params.id);
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.phone = req.body.phone;
    customer.notes = req.body.notes;
    await customer.save();

    return res.redirect(`/${customer.id}/`);
  } catch (err) {
    return next(err);
  }
};
