/*
 * setup-db.js
 * Run once to initialize the database: node setup-db.js
 * Handles DELIMITER parsing that the mysql CLI struggles with in non-interactive mode.
 */

require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Parses SQL files that use DELIMITER // for stored procedures.
// Processes line by line, tracking delimiter changes, so DROP/CREATE statements
// are never accidentally merged into one.
function parseSqlFile(filePath) {
    let sql = fs.readFileSync(filePath, 'utf8');

    // Remove block comments /* ... */
    sql = sql.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove line comments -- ...
    sql = sql.replace(/--[^\n]*/g, '');

    const statements = [];
    let delimiter = ';';
    let buffer = '';

    for (const line of sql.split('\n')) {
        const trimmed = line.trim();

        // Only process DELIMITER commands when between statements (buffer empty)
        const delimMatch = trimmed.match(/^DELIMITER\s+(\S+)$/i);
        if (delimMatch && buffer.trim() === '') {
            delimiter = delimMatch[1];
            continue;
        }

        buffer += line + '\n';

        // Check if buffer ends with the current delimiter
        if (buffer.trimEnd().endsWith(delimiter)) {
            const stmt = buffer.trimEnd().slice(0, -delimiter.length).trim();
            if (stmt) statements.push(stmt);
            buffer = '';
        }
    }

    if (buffer.trim()) statements.push(buffer.trim());
    return statements;
}

async function run() {
    // Connect without specifying a database first so we can create it
    const conn = await mysql.createConnection({
        host:     process.env.DB_HOST,
        port:     process.env.DB_PORT || 3306,
        user:     process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        multipleStatements: false
    });

    try {
        // Create and select the database
        await conn.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
        await conn.query(`USE \`${process.env.DB_NAME}\``);
        console.log(`Using database: ${process.env.DB_NAME}\n`);

        // Step 1: Load DDL — creates sp_load_coffeedb procedure
        console.log('Step 1: Loading DDL...');
        const ddl = parseSqlFile(path.join(__dirname, '../DDL.sql'));
        for (const stmt of ddl) {
            await conn.query(stmt);
        }
        console.log('  Done.\n');

        // Step 2: Call sp_load_coffeedb() to create tables and seed data
        console.log('Step 2: Creating tables and seeding data...');
        await conn.query('CALL sp_load_coffeedb()');
        console.log('  Done.\n');

        // Step 3: Load PL.SQL — creates all CRUD stored procedures
        console.log('Step 3: Loading stored procedures...');
        const pl = parseSqlFile(path.join(__dirname, '../PL.SQL'));
        for (const stmt of pl) {
            await conn.query(stmt);
        }
        console.log('  Done.\n');

        console.log('Database setup complete!');
    } catch (e) {
        console.error('Error:', e.message);
        process.exit(1);
    } finally {
        await conn.end();
    }
}

run();
