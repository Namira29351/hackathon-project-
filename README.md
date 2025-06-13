# BookWorm Book Log App
As busy students, it is very hard to keep track of all the books we've read and all the books we want to read. BookWorm allows users to have a neat and organized list of their most favorite books. Anytime you finish a book or pick up a new book, you can easily log the book into the BookWorm app and never have to worry about forgetting and losing track of the wonderful adventures you've taken through reading.

## UI/UX
When first open the BookWorm app, the user is welcomed with the homescreen that shows two options of viewing 'finished' or 'unfinished' books. The top right corner of the screen has a button that allows users to meet the developers of BookWorm. 

If a user chooses to view finished books, they will be a see a list of books along with the genre, title, author, their personal rating of each book, and the option to delete a book. At the top of the list, users can choose to add a book. This button will take them to a new screen where they can input the genre, title, and author of a book they've read or want to read. 

Checking off the box for the 'finished' section determines whether the book goes into the finished list of books or the unfinished list of books. The ratings for the finished books are the personal ratings of the books.

## Installation and Usage
1. Clone the repository.
2. Set up the database in the postgres terminal:
```
    PGUSER=<postgres_username>
    PGPASSWORD=<postgres_password>
    PGHOST=localhost
    PGDATABASE=book_log_db
    PGPORT=5432
    PORT=3006
    NODE_ENV=development
```
3. Install the dependencies: Use npm install to install node.js and react in your root folder. Use npm install on your backend to install express and use npm install in your frontend to install react.
4. After you have all the dependencies and set up the clone, open two terminals on your device. Then cd into backend on one terminal and cd into frontend on the other terminal. Use npm start on both to run the application.

## Preview
![alt text](<frontend/src/assets/Screenshot 2025-06-12 at 5.40.59 PM.png>)

![alt text](<frontend/src/assets/Screenshot 2025-06-12 at 5.41.21 PM.png>)

![alt text](<frontend/src/assets/Screenshot 2025-06-12 at 5.41.36 PM.png>)

![alt text](<frontend/src/assets/Screenshot 2025-06-12 at 5.42.00 PM.png>)