import { Router } from "express";
import loanController from "../controller/loan.controllers.js";
import { validate, validateLoanId } from "../middleware/validation.middlewares.js";
import { loanSchema } from "../schema/loan.schema.js";

const router = Router();

router.post(
  "/loans",
  validate(loanSchema),
  loanController.createLoanController
);
router.get("/loans", loanController.findAllLoansController);
router.get("/loans/:id", validateLoanId, loanController.findLoanByIdController);
router.delete("/loans/:id", validateLoanId, loanController.deleteLoanController);
export default router;
