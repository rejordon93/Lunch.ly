import db from "../db.js";
import Reservation from "./reservation.js";

class Customer {
  constructor({ id, firstName, lastName, phone, notes }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.notes = notes;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static async searchByName(query) {
    const results = await db.query(
      `SELECT id, first_name AS "firstName", last_name AS "lastName", phone, notes
       FROM customers
       WHERE lower(first_name || ' ' || last_name) LIKE $1`,
      [`%${query.toLowerCase()}%`]
    );

    return results.rows.map((row) => new Customer(row));
  }

  static async getReservationsForCustomer(customerId) {
    const results = await db.query(
      `SELECT id, customer_id AS "customerId", num_guests AS "numGuests", start_at AS "startAt", notes
       FROM reservations
       WHERE customer_id = $1`,
      [customerId]
    );

    return results.rows.map((row) => new Reservation(row));
  }

  static async all() {
    const results = await db.query(
      `SELECT id, first_name AS "firstName", last_name AS "lastName", phone, notes
       FROM customers
       ORDER BY last_name, first_name`
    );

    return results.rows.map((c) => new Customer(c));
  }

  static async get(id) {
    const results = await db.query(
      `SELECT id, first_name AS "firstName", last_name AS "lastName", phone, notes 
       FROM customers
       WHERE id = $1`,
      [id]
    );

    const customer = results.rows[0];

    if (customer === undefined) {
      const err = new Error(`No such customer: ${id}`);
      err.status = 404;
      throw err;
    }

    return new Customer(customer);
  }

  async getReservations() {
    return await Customer.getReservationsForCustomer(this.id);
  }

  async save() {
    if (this.id === undefined) {
      const result = await db.query(
        `INSERT INTO customers (first_name, last_name, phone, notes)
         VALUES ($1, $2, $3, $4)
         RETURNING id`,
        [this.firstName, this.lastName, this.phone, this.notes]
      );
      this.id = result.rows[0].id;
    } else {
      await db.query(
        `UPDATE customers SET first_name = $1, last_name = $2, phone = $3, notes = $4
         WHERE id = $5`,
        [this.firstName, this.lastName, this.phone, this.notes, this.id]
      );
    }
  }
}

export default Customer;
