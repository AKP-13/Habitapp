const { Pool } = require('pg')
require('dotenv').config()

// WINDOWS USERS: UNCOMMENT LINES 5 - 11
const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port : process.env.port
})
//// APPLE USERS UNCOMMENT LINES 13-15
// const pool = new Pool ({
//     database: 'habitapp'
// })

function run(q, values, callback) {
    return pool.query(q, values, callback)
}

module.exports = { run }