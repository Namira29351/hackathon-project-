import * as db from "../db/index.js";

export const getFinished = async (req, res) => {
    try {
      const dbResponse = await db.query("SELECT * FROM books WHERE finished = true");
      const result = dbResponse.rows.map ((row) => (
        {Genre: row.genre, Title: row.title, Author: row.author, Rating: parseFloat(row.rating.toFixed(1)),
        
        }));
      res.json(result);
    } catch (error) {
      console.error("Could not show data:", error);
      res.status(500).json({ error:"Server error" });
    }
  };


export const getUnfinished = async (req, res ) => {
    try {
        const dbResponse = await db.query("SELECT * FROM books WHERE finished = false");
        const result = dbResponse.rows.map((row) => ({
            Genre: row.genre,
            Title: row.title,
            Author: row.author,
            Rating: parseFloat(row.rating.toFixed(1)),
        }));
        res.json(result);
    } catch (error) {
        console.error("couldn't show data:", error);
        res.status(500).json({ error: "Server error"})
    }
};


