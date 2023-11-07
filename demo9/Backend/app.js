const express = require('express');
const app = express();
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();


const connectionString = process.env.CONNECTION_URL;
const pool = new Pool({ connectionString });
let client;

async function connectDB() {
    client = await pool.connect();
    console.log('Successfully connected to db!');
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create', async (req, res) => {
    const { playername, power } = req.body;
    console.log(playername, power);
    try {
        const query = `
        INSERT INTO players (name, power)
        VALUES ($1, $2)
        RETURNING *
        `;
        const result = await pool.query(query, [playername, power]);
        if (result.rows.length === 1) {
            const user = result.rows[0];
            res.json({ userId: user.userid, username: user.username });
            console.log('Successfully created user!');
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error logging in', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/delete', async (req, res) => {
    const playerName = req.body;
    console.log(playerName);
    try {
        // SQL query to delete a player by name
        const sql = 'DELETE FROM players WHERE name = $1';
        const result = await pool.query(sql, [playerName]);
        console.log(result);
        if (result.affectedRows === 1) {
            res.json({ message: 'Player deleted successfully' });
            console.log('Successfully deleted player!');
        } else {
            res.status(404).json({ message: 'Player not found' });
        }
    } catch (error) {
        console.error('Error deleting player', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/getall', (req, res) => {
    pool.query('SELECT * FROM players', (error, result) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'An error occurred while fetching players' });
        } else {
            res.json(result.rows);
        }
    });
});



app.post('/search/:searchName', async (req, res) => {
    const { searchName } = req.params;
    if (!searchName) {
        res.status(400).send('Bad Request: Search parameter is missing');
        return;

    }
    pool.query(
		`SELECT * FROM players WHERE name = $1`,
		[searchName],
		(error, result) => {
			if (error) {
				console.error('Error executing query', error);
				res.status(500).json({ error: 'Internal Server Error' });
				return;
			}

			const players = result.rows;
			res.json(players);

		},
	);
});





app.post('/increase/:searchName/:power', async (req, res) => {
    const { searchName, power} = req.params;
    try {
        const query = `
        UPDATE players
        SET power = $2 + 1
        WHERE name = $1;
        `;
        const result = await pool.query(query, [searchName, power]);
        console.log(result);
    } catch (error) {
        console.error('Error logging in', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




app.post('/decrease/:searchName/:power', async (req, res) => {
    const { searchName, power} = req.params;
    try {
        const query = `
        UPDATE players
        SET power = $2 - 1
        WHERE name = $1;
        `;
        const result = await pool.query(query, [searchName, power]);
        console.log(result);
    } catch (error) {
        console.error('Error logging in', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});











const PORT = 3050;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});