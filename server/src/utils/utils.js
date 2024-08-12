import jwt from 'jsonwebtoken';
import { createClient } from 'redis';

function capitalize(string) {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
}

function format(string) {

    return capitalize(string).trim()
}

export function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h' })
}

export async function getOrSetCache(key, expiration = 3600, cb) {
    const client = await createClient()
      .on('error', err => console.log('Redis Client Error', err))
      .connect();

    return new Promise(async (resolve, reject) => {
        const data = await client.get(key)
        if (data != null) {
            resolve(JSON.parse(data))
        }
        const freshData = await cb()
        client.setEx(key, expiration, JSON.stringify(freshData))
        resolve(freshData)

    })

}


export default { capitalize, format, generateAccessToken, getOrSetCache }