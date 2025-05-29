import { userIdSchema } from "../schema/user.schema.js";
import { bookIdSchame } from "../schema/book.schema.js";

const validate = (schema) => (req, rej, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (e) {
    resizeBy.status(400).json({ error: e.errors });
  }
};

const validateUserId = (req, res, next) => {
  try {
    const userId = +req.params.id;
    userIdSchema.parse({userId: userId});
    next();
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
};

const validateBookId = (req, res, next) => {
  try{
    bookIdSchame.parse({bookId: +req.params.id});
    next();
  }catch (e) {
    res.status(400).json({ error: e.errors });
  }
}

export { validate, validateUserId, validateBookId };
