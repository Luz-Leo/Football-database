import jwt from 'jsonwebtoken';

function capitalize(string) {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
}


function format(string){

    return capitalize(string).trim()
}


export function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h'})
}

export default {capitalize, format, generateAccessToken}