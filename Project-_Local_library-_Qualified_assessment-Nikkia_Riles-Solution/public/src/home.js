
function getTotalBooksCount(books) {
 return books.length;
}


function getTotalAccountsCount(accounts) {
 return accounts.length;
}

function getBooksBorrowedCount(books) {
 return books.reduce((acc, book) =>{
    //console.log("borrows", book.borrows)
   //book.borrows.filter((record) => record.returned === false).length > 0
!book.borrows[0].returned ? acc++ : null
return acc
 },0);
 console.log(("booksCheckedOut", booksCheckedOut))

}

function getMostCommonGenres(books) {
 let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}
function helperFunction(books, authors) {
  return authors.map(author => {
    const authorName = `${author.name.first} ${author.name.last}`;
    const booksBy = books.filter(book => book.authorId === author.id);
    const borrows = booksBy.reduce((total, book) => total + book.borrows.length, 0);
    const authorInfo = {name: authorName, count: borrows};
    return authorInfo;
  }); 
}
function getMostPopularAuthors(books, authors) {
let mostPopularAuthor = helperFunction(books, authors)
mostPopularAuthor.sort((authA, authB) => authB.count - authA.count);
mostPopularAuthor.splice(5);
return mostPopularAuthor;
}

module.exports = {
 getTotalBooksCount,
 getTotalAccountsCount,
 getBooksBorrowedCount,
 getMostCommonGenres,
 getMostPopularBooks,
 getMostPopularAuthors
};
