import React from "react";
import Book from "./Book";

function RenderingLists() {
  const bookList = [
    "Harry Potter and the Philosopher's Stone",
    "Harry Potter and the Chamber of Secrets",
    "Harry Potter and the Prisoner of Azkaban",
    "Harry Potter and the Goblet of Fire",
    "Harry Potter and the Order of the Phoenix",
    "Harry Potter and the Half-Blood Prince",
    "Harry Potter and the Deathly Hallows",
  ];

  const books = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      pages: 223,
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J. K. Rowling",
      pages: 251,
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      pages: 317,
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      author: "J. K. Rowling",
      pages: 636,
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      author: "J. K. Rowling",
      pages: 766,
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      author: "J. K. Rowling",
      pages: 607,
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      author: "J. K. Rowling",
      pages: 607,
    },
  ];

  return (
    <div>
      {bookList.map((book) => {
        return <h2 key={book}>{book}</h2>;
      })}
      <hr />
      {books.map((book) => {
        return (
          <div key={book.title}>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
          </div>
        );
      })}
      <hr />
      {books.map((book) => {
        return <Book key={book.title}book={book} />;
      })}
    </div>
  );
}

export default RenderingLists;

// Map is just like a for loop but cooler!
// Don't copy-paste, use map function instead!

/*
When to use index as a key?
1.| Use index only if no unique IDs are available
2.| The list of elements you're rendering must be static
3.| Your list must never be sorted or filtered

How to get a unique key?
1.| Derive one from list item's properties
2.| Use one of npm's libraries, i.e. uuid, uuidv4, nanoid, etc

Rendering lists in React
1.| Make sure every item has a unique key prop. 

2.| Don't use index in general, leads to issues when adding, removing or filtering items
*/