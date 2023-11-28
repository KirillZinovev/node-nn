const sqlite = require("seqlite3").verbose();
const db = new sqlite3.Database("test.sqlite");

const sql =
  "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, password TEXT NOT NULL, age INTEGER NOT NULL)";

db.run(sq);

class User {
  constructor() {}

  static create() {}

  static findByEmail(email) {}
}
