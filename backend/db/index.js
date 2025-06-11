import pg from "pg";
const { Pool } = pg;


const pool = new Pool();

export const query = (text, params, callback) => {

  console.log("Hello from your yelp db!");
  return pool.query(text, params, callback);
};