import { useState } from 'react';
import './App.css';

function Homepage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [gender, setGender] = useState("")
    
    let localPersonList = JSON.parse(localStorage.getItem("persons")) || [];
    let personList = []



    const newPerson = () => {
        personList.push(
            {
                name: name,
                age: age,
                country: country,
                gender: gender
            }
        )
        localStorage.setItem('persons', JSON.stringify(personList))
    }

    if (personList !== null) {
        personList = [...localPersonList]
    }

    return (
        <div className="App">
            <input onChange={(e)=>setName(e.target.value)} placeholder='name'></input>
            <input onChange={(e)=>setAge(e.target.value)} placeholder='age'></input>
            <input onChange={(e)=>setCountry(e.target.value)} placeholder='country'></input>
            <input onChange={(e)=>setGender(e.target.value)} placeholder='gender'></input>
            <button onClick={newPerson}>Add</button>
            <button onClick={() => window.location.href = 'filter'}>Go filter page</button>
        </div>
    );
}

export default Homepage;
