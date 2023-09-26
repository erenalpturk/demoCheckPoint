import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';


function FilterPage() {
    const [name1, setName1] = useState("-")
    const [age1, setAge1] = useState("-")
    const [country1, setCountry1] = useState("-")
    const [gender1, setGender1] = useState("-")

    return (
        <div className="App">
            FİLTER PAGE

            <input onChange={(e)=>setName1(e.target.value)} placeholder='name'></input>
            <input onChange={(e)=>setAge1(e.target.value)} placeholder='age'></input>
            <input onChange={(e)=>setCountry1(e.target.value)} placeholder='country'></input>
            <input onChange={(e)=>setGender1(e.target.value)} placeholder='gender'></input>

            <button onClick={()=>window.location.href=`/filtered/${name1}/${age1}/${country1}/${gender1}`}>show</button>
            <button onClick={()=>window.location.href='/'}>Go homepage</button>


        </div>
    );
}

export default FilterPage;
