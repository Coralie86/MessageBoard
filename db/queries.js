const pool = require('./pool');

async function getAllMessages() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function messageCreateNew(username, message) {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2) ", [username, message]);
}

async function getMessageId(id) {
    const {rows} = await pool.query("SELECT * FROM messages where id = $1", [id]);
    return rows[0];
}

module.exports = {
    getAllMessages,
    messageCreateNew,
    getMessageId
};