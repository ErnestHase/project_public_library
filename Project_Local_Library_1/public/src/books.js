function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function findAuthorById(authors, id) {
   return authors.find(author => (author.id === id))
 }
 
function findBookById(books, id) {
   return books.find(book => (book.id === id))
 }
 
function partitionBooksByBorrowedStatus(books) {
   const returnArray = [];
   const notReturned = books.filter(book => {
     for(let i in book.borrows){
       if(!book.borrows[i].returned) return book
     }
   })
   const returned = books.filter(book => {
     const returns = book.borrows.every(bookA => bookA.returned === true)
     if(returns) return book
   })
   returnArray.push(notReturned)
   returnArray.push(returned)
   return returnArray
 }
 
function getBorrowersForBook(book, accounts) {
 const allBorrowers = book.borrows.map((lend) => {
  const account = findAccountById(accounts, lend.id);
   /* the line above here should be the helper function needed. If it is not sufficient let me know what more i need to add so it will pass. */
   return {
     id: lend.id, 
     returned: lend.returned, 
     ...account
   };
 });

 while(allBorrowers.length > 10) {
   allBorrowers.pop();
 }

 return allBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
