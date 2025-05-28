import jwt from 'jsonwebtoken';

function generateJWT(id) {
    return jwt.sign(
        
        {id},
        '87E71F18096F5CE5E56FDAA9BA8C2D09866B110AD67FA20C86112F5489595F08',
        {expiresIn: '86400s'

        });
}

export {generateJWT}