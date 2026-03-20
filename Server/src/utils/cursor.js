import crypto from 'crypto';

const SECRET = process.env.CURSOR_SECRET || 'topSecret';
const TTL = 5 * 60 * 1000;     // TTl-Time to live

/*-------------- ENCODED THE CURSOR_TOKEN--------------------- */

export const encodeCursor = (payload) => {
    const data = {...payload, exp: Date.now() + TTL};


    // make a random string which is not readable
    const base64 = Buffer.from(JSON.stringify(data)).toString("base64"); 

    // make signature - if cursor change - signature break❌
    const signature = crypto
    .createHmac("sha256", SECRET)
    .update(base64)
    .digest("hex")

    return `${base64}.${signature}`;
};


/*-------------- DECODED THE CURSOR_TOKEN--------------------- */

export const decodeCursor = (cursor) => {
    // Destructure the values - And split the value by dot
    const [base64, signature] = cursor.split(".");


    // Recreate the signature 
    const expectedSignature = crypto
    .createHmac("sha256", SECRET)
    .update(base64)
    .digest("hex")

    // Verify the existing signature with new signature 
    if(signature !== expectedSignature){
        throw new Error("Invalid cursor")
    }

    // Decode the data 
    const data = JSON.parse(
        Buffer.from(base64, "base64").toString("utf-8")
    );

    // Check expiry of token 
    if (Date.now() > data.exp) {
        throw new Error("Cursor Expired")
    }

    return data;
}
