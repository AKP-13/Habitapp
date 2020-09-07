const index = 'SELECT * FROM users';
const showUsers = `SELECT * FROM users WHERE userID = $1`;
const showRunning = 'SELECT * FROM running';
const showRunUser = 'SELECT users.username, usertarget, userprogress, startdate, daysforgoal FROM running RIGHT JOIN users ON users.userid = running.userid WHERE running.userid = $1;'
const createUser = `INSERT INTO users (username, userPassword, userEmail) VALUES ($1, $2)`
const loadRunResults =
module.exports = { index, showUsers, showRunning, showRunUser, createUser }