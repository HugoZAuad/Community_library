import loanService from "../service/loan.service.js";

async function createLoanController(req, res) {
  const { bookId, dueDate } = req.body;
  const userId = req.userId;

  try {
    const createLoan = await loanService.createLoanService(
      userId,
      bookId,
      dueDate
    );
    res.status(201).send(createLoan);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function findAllLoansController(req, res) {
  try {
    const findAllLoans = await loanService.findAllLoansService();
    res.send(findAllLoans);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

export default {
  createLoanController,
  findAllLoansController,
};