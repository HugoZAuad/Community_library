import loanRespositories from "../repositories/loan.respositories.js";

async function createLoanService(userId, bookId, dueDate) {
  const createLoan = await loanRespositories.createLoanRepository(
    userId,
    bookId,
    dueDate
  );

  if(!createLoan) {
    throw new Error("Error creating loan");
  }
  return createLoan;
}

async function findAllLoansService() {
    const findAllLoans = await loanRespositories.findAllLoansRepository();
    return findAllLoans;
}

export default {
    createLoanService,
    findAllLoansService,
    
}