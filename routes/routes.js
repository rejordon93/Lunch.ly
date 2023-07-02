import express from "express";
import {
  getAll,
  showAddForm,
  add,
  getById,
  showEditForm,
  edit,
} from "../controllers/customer.js";

import { addR } from "../controllers/reservation.js";

const router = express.Router();

// Homepage: show list of customers.
router.get("/", getAll);

// Form to add a new customer.
router.get("/add/", showAddForm);

// Handle adding a new customer.
router.post("/add/", add);

// Show a customer, given their ID.
router.get("/:id/", getById);

// Show form to edit a customer.
router.get("/:id/edit/", showEditForm);

// Handle editing a customer.
router.post("/:id/edit/", edit);

// Handle adding a new reservation.
router.post("/:id/add-reservation/", addR);

export default router;
