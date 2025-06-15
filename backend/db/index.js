// Importing the pg tool
import pg from "pg";
const { Pool } = pg;

// Creating a pool of database connections. This group of connections helps us talk to our database.
const pool = new Pool();

// When a query function is called, the request is passed to one of the connections.
// text: The question that is being asked. (what the query function is looking for)
// params: Specific details
// callback: what happens once our database responds.

export const query = (text, params, callback) => {

  console.log("Hello from your yelp db!");
  return pool.query(text, params, callback);
};