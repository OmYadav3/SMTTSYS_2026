import { sql } from "../config/db.js"

/* Get All Users */
export const getAllUsers = async () => {
  try {
    // sql.query uses the existing connection
    const result = await sql.query`SELECT * FROM Users`;
    return result.recordset; 
  } catch (err) {
    console.error("SQL error", err);
  }
};

/*  FIND USER BY EMAIL AND ROLE  */
const findUserByEmailAndRole = async (email, role) => {
    try {
        
        const [rows] = await sql.query(
            "SELECT * FROM users WHERE email = ?, AND role = ?",
            [email, role]
        )
        return rows[0];

    } catch (error) {
        console.error("SQL error in find by email and role ", error);
    }
}

/*  FIND USER BY EMAIL AND ROLE  */
const createNewUser = async ({ name, email, password, role }) => {
    const [result] = await sql.query(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, password, role]
    )
    return result.insertId;
}

export {
    findUserByEmailAndRole,
    createNewUser
}

