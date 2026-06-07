#! /usr/bin/env node

const {Client} = require('pg');

const now = new Date();

const SQL = `
CREATE TABLE IF NOT EXISTS  messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR (255),
    message VARCHAR (255)
);

INSERT INTO messages (username, message)
VALUES
  ('Pedro', 'Hello world'),
  ('John', 'How are you ?'),
  ('Charles', 'Do you wan to drink something?'),
  ('Maria', 'Lets have a drink!');

`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: "postgresql://coralie:Chipie1312@localhost:5432/messagerie",
    });
    await client.connect();
    await client.query(SQL);
    await client .end();
    console.log("done");
}

main();