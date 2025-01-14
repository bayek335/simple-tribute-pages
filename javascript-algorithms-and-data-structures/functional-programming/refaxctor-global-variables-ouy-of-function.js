// The global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
  return [...bookList, bookName];

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  return bookList.filter((bl) => bl !== bookName);
}

var newBookList = add(bookList, "A Brief History of Time");

var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");

var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(newBookList);

console.log(newerBookList);

console.log(newestBookList);
