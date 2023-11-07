
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Home() {
    const [playername, setName] = useState('');
    const [searchName, setSearchName] = useState('');
    const [power, setPower] = useState('');
    const [allPlayers, setAllPlayers] = useState([]);

    const HandleSubmit = (e) => {
        axios
            .post('http://localhost:3050/create', { playername: playername, power: power })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const HandleSubmitDel = (e) => {
        console.log(playername)
        axios
            .post('http://localhost:3050/delete', { playername: playername })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // CREATE TABLE players (
    //     name VARCHAR(255),
    //     power INT
    // );

    return (
        <div className="App">
            <div className='container'>
                <h1>create</h1>
                <input type="text" placeholder='name' name="" id="" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='power' name="" id="" onChange={(e) => setPower(e.target.value)} />
                <button onClick={() => { HandleSubmit(); console.log("create") }}>Create</button>
            </div>
            <div className='container'>
                <h1>delete</h1>
                <input type="text" placeholder='name' name="" id="" onChange={(e) => setName(e.target.value)} />
                <button onClick={() => { HandleSubmitDel(); console.log("delete") }}>DEL</button>
            </div>


            <div className='container'>
                <h1>ALL PLAYERS</h1>
                <button onClick={() => {
                    axios.get('http://localhost:3050/getall')
                        .then(response => {
                            // Handle the successful response here
                            const players = response.data; // Assuming the API returns an array of player objects
                            console.log(players);
                            setAllPlayers(players);
                        })
                        .catch(error => {
                            // Handle any errors that occurred during the request
                            console.error('Error fetching player data:', error);
                        });
                }}>GET ALL PLAYERS</button>

                <div>{allPlayers.map((player, index) => (
                    <div key={index}>
                        <p><b>{player.name}</b> {player.power}</p>
                    </div>
                ))}</div>
            </div>


            <div className='container'>
                <h1>EDİT PLAYERS</h1>
                <input onChange={(e) => { setSearchName(e.target.value) }} type="text" placeholder='name' name="" id="" />
                <button
                    onClick={() => {
                        axios
                            .post(`http://localhost:3050/search/${searchName}`)
                            .then((response) => {
                                setPower(response.data[0].power);
                                setSearchName(response.data[0].name);
                                console.log(response.data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }}
                >SEARCH</button>
                <div>{searchName} {power}</div>
                <div>
                    <button onClick={() => {
                        console.log(searchName);
                        axios
                            .post(`http://localhost:3050/increase/${searchName}/${power}`)
                            .then((response) => {
                                console.log(response.data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }}
                    >+</button>
                    <button onClick={() => {
                        console.log(searchName);
                        axios
                            .post(`http://localhost:3050/decreasec/${searchName}/${power}`)
                            .then((response) => {
                                console.log(response.data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }}>-</button>
                </div>
            </div>

        </div>
    );
}

export default Home;
