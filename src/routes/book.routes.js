import bookController from "../controller/book.controllers.js";
import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { validate, validateBookId } from "../middleware/validation.middlewares.js";
import {bookSchema} from "../schema/book.schema.js";

const router = Router();

router.get("/books", bookController.findAllBooksController);

router.use(authMiddleware);
router.post(
  "/books",
  validate(bookSchema),
  bookController.createBookController
);
router.get("/books/search", bookController.searchBooksController);
router.get("/books/:id", validateBookId, bookController.findBookByIdController);
router.patch("/books/:id", validateBookId, bookController.updateBookController);
router.delete("/books/:id", validateBookId, bookController.deleteBookController);



export default router;
