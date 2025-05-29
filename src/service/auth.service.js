import jwt from 'jsonwebtoken';
import "dotenv/config";
import userRepository from '../repositories/user.repositories.js';
import bcrypt from 'bcrypt';

function generateJWT(id) {
    return jwt.sign(        
        {id},
        process.env.SECRET, 
        {expiresIn: '24h'}
    );
}

async function loginService(email, password) {
    const user = await userRepository.finderUserByEmailRepository(email);
    if(!user) throw new Error('Invalid user');
    const isPassordvalid = await bcrypt.compare(password, user.password);
    if(!isPassordvalid) throw new Error('Invalid user');
    return generateJWT(user.id);
}

export {generateJWT, loginService};