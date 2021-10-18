function Book(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }

  Book.getTitles = (...books) => {
    console.log(this); // Book class (constructor function)
    return books.map(book => book.title);
  }

  const gobletOfFire = new Book(
    'The Goblet of Fire',
    'Harry Potter',
    'J.K. Rowling'
  );
  const titles = Book.getTitles(gobletOfFire);

