import pkg from "pg";
const { Client } = pkg;

const db = new Client("postgresql:///lunchly");

db.connect();

export default db;
