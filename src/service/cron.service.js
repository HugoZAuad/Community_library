import cron from 'node-cron';
import moment from 'moment';
import loanRepository from '../repositories/loan.respositories.js';
import { sendEmail } from '../service/email.service.js';
import userRepository from '../repositories/user.repositories.js';
import bookRepository from '../repositories/book.repositories.js';

cron.schedule('38 * * * *', async () => {
    console.log('Running daily task at 9 AM');
    const loans = await loanRepository.findAllLoansRepository();
    const today = moment().startOf('day');

    for (const loan of loans) {
        const dueDate = moment(loan.dueDate).startOf('day');
        const reminderDueDate = moment(dueDate).subtract(1, 'days');
        if (today.isSame(reminderDueDate)) {
            if (loan.email && loan.title) {
                sendEmail(loan.email, loan.title, loan.dueDate);
            } else {
                console.error('Missing user or book information for loan:', loan);
            }
        }
    }
})
