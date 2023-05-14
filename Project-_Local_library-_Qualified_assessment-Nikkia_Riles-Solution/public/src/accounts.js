
function findAccountById(accounts, id) {
 let foundId = accounts.find((account) => account.id === id);
 return foundId;
}


function sortAccountsByLastName(accounts) {
 accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;
}


function getTotalNumberOfBorrows(account, books) {
 let totalBorrows = 0;
  console.log("books", books)
for (let id in books) {
    console.log("id", books[id].borrows)
    console.log("account.id", account.id)
   let thing = books[id].borrows.filter((entry)=>entry.id === account.id).length 
   console.log("thing", thing)
   totalBorrows += thing;
    //check if account id matches borrows id and increment total borrows
  //for (let j = 0; j < books[i].borrows.length; j++) {
//    if (account.id === books[i].borrows[j].id) {
//     totalBorrows += 1;
//    }
//   }
 }
 return totalBorrows;
}


function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}

module.exports = {
 findAccountById,
 sortAccountsByLastName,
 getTotalNumberOfBorrows,
 getBooksPossessedByAccount
};