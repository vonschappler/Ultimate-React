const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// --------------------------
// Destructuring Objects
// --------------------------

const book = getBook(1);
console.log(book);
//const title = book.title;
//const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title);

// --------------------------
// Destructuring with arrays
// --------------------------

// const primaryG = genres[0];
// const secondaryG = genres[1];
const [primaryG, secondaryG, ...otherGenres] = genres;
console.log(primaryG, secondaryG, otherGenres);

// --------------------------
// Spread operator with arrays
// --------------------------

// const newGenresWrong = [genres, 'epic fantasy'];
// console.log(newGenresWrong);
// Creates a new array called newGenres with the item 'epic fantasy' as it last element
const newGenresA = [...genres, 'epic fantasy'];
console.log(newGenresA);
// Creates a new array called newGenres with the item 'epic fantasy' as it first element
const newGenresB = ['epic fantasy', ...genres];
console.log(newGenresB);

// --------------------------
// Spread operator with objects to add and overwrite properties
// --------------------------

// const newBookWrong = { book, moviePublication: '2001-12-19' };
// console.log(newBookWrong);
const updateBook = { ...book, moviePublication: '2001-12-19', pages: 1210 };
console.log(updateBook);

// --------------------------
// Literals
// --------------------------

const summary = `${title} is ${pages}-page long book. It was written by ${author} and published in ${
  publicationDate.split('-')[0]
}. The book has${hasMovieAdaptation ? '' : ' not '}been adpted as a movie.`;
console.log(summary);

// --------------------------
// Ternaries
// --------------------------

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than a thousand';
console.log(`The book has ${pagesRange} pages.`);

// --------------------------
// Arrow functions
// --------------------------

// "Old way" also know as a declarative function
// function getYear(str) {
//   return str.split('-')[0];
// }

// Arrow function also know as function expression
// with blocks - requires the return keyword at the end of the block
const getYearBlock = (str) => {
  const year = str.split('-')[0];
  return year;
};

// without blocks
const getYearNoBlock = (str) => str.split('-')[0];

console.log(getYearNoBlock(publicationDate));

const newSummary = `${title} is ${pages}-page long book. It was written by ${author} and published in ${getYearNoBlock(
  publicationDate
)}. The book has${hasMovieAdaptation ? '' : ' not '}been adpted as a movie.`;
console.log(newSummary);

// --------------------------
// Logical operators and short-circuiting
// --------------------------

// && operator short-circtuit when the first agument is a falsy value
// || operator short-circuit when the first argument is a truthy value
// falsy values: 0, '', null, undefined, false
// truthy values: everything else

// && No short-circuit
console.log(true && 'Some string');
// && Short-circuit
console.log(false && 'Not a string');

// || No short-circuit
console.log(true || 'Some string');
// || Short-circuit - can be used to set default values, when the falsy value is not 0, becuase 0 (if as a data value) will make the code short-cirtuit instead of returning 0, as expected.
console.log(false || 'Not a string');

// Nulish coalescing - alternative to || when checking for the value 0 on data
console.log(0 ?? 'I am a ZERO!');

console.log(hasMovieAdaptation && 'This book as a movie!');
console.log(book.translations.bengali);

const bengaliTranslation = book.translations.bengali || 'Not translated';
console.log(bengaliTranslation);

// --------------------------
// Optional Chaining
// --------------------------

const newBook = getBook(3);

function getTotalReviewCount(book) {
  const gooodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return gooodreads + librarything;
}

console.log(getTotalReviewCount(newBook));
