import loanRespositories from "../repositories/loan.respositories.js";

async function createLoanService(userId, bookId, dueDate) {
  const createLoan = await loanRespositories.createLoanRepository(
    userId,
    bookId,
    dueDate
  );

  if (!createLoan) {
    throw new Error("Error creating loan");
  }
  return createLoan;
}

async function findAllLoansService() {
  const findAllLoans = await loanRespositories.findAllLoansRepository();
  return findAllLoans;
}

async function findLoanByIdService(loanId) {
  const loan = await loanRespositories.findLoanByIdRepository(loanId);
  if (!loan) throw new Error("Loan not found");
  return loan;
}

async function deleteLoanService(loanId, userId) {
  const loan = await loanRespositories.findLoanByIdRepository(loanId);
  if (!loan) throw new Error("Loan not found");
  if (loan.userId !== userId) throw new Error("Unauthorized");
  const response = await loanRespositories.deleteLoanRepository(loanId);
  return response;
}
export default {
  createLoanService,
  findAllLoansService,
  findLoanByIdService,
  deleteLoanService,
};
