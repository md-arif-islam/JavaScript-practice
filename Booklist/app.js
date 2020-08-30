// Book Class: represents a book

class book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks

class UI {
  static displayBook() {
    const StoreBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "743788",
      },
      {
        title: "Book Two",
        author: "John Doe",
        isbn: "87438",
      },
    ];

    const books = StoreBooks;
    books.forEach((book) => UI.addBookList(book));
  }

  static addBookList() {
    const list = document.querySelector("#book_list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}<td/>
    <td>${book.author}<td/>
    <td>${book.isbn}<td/>
    <td><a href="#" class= "btn btn-danger btn-sm delete">X<a/><td/>
    `;

    list.appendChild(row);
  }
}

// Store Class: Handels Storage

// Events: Display Books

document.addEventListener("DOMContentLoaded", UI.displayBook);
// Events: Add a book

// Events: Remove a book
