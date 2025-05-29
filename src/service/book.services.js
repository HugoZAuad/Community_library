import bookRepositories from "../repositories/book.repositories.js";

async function createBookService(newBook, userId) {
  const createdBook = await bookRepositories.createBookRepository(
    newBook,
    userId
  );
  if (!createdBook) throw new Error("Error creating book");
  return createdBook;
}

async function findAllBooksService() {
  const books = await bookRepositories.findAllBooksRepository();
  return books;
}

async function findBookByIdService(bookId) {
  const book = await bookRepositories.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  return book;
}

async function updateBookService(updateBook, bookId, userId) {
  const book = await bookRepositories.findBookByIdRepository(bookId)
  if (!book) throw new Error("Book not found");
  if (book.userId !== userId) throw new Error("Unauthorized");
  const response = await bookRepositories.updateBookRepository(
    updateBook,
    bookId
  )
  return response;
}

async function deleteBookService(bookId, userId) {
  const book = await bookRepositories.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  if (book.userId !== userId) throw new Error("Unauthorized");
  const response = await bookRepositories.deleteBookRepository(bookId);
  return response;
}

export default {
  createBookService,
  findAllBooksService,
  findBookByIdService,
  updateBookService,
  deleteBookService
};
