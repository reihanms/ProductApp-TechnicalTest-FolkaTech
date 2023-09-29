const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbPool.execute(SQLQuery)
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (first_name, last_name, email, number, password) 
    VALUES ('${body.first_name}', '${body.last_name}', '${body.email}','${body.number}','${body.password}')`
    return dbPool.execute(SQLQuery)
}

const findOne = ({email}) => {
    const SQLQuery = `SELECT * From users WHERE email='${email}'`
    return dbPool.execute(SQLQuery)
}
module.exports = {
    getAllUsers,
    createNewUser,
    findOne
}