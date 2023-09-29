const dbPool = require('../config/database');

const getAllProducts = () => {
    const SQLQuery = 'SELECT * FROM products'
    return dbPool.execute(SQLQuery)
}
const getProductById = (id) => {
    const SQLQuery = `SELECT * FROM products WHERE product_id = '${id}'`
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllProducts,
    getProductById
}