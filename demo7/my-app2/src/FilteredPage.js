import './App.css';
import { useParams } from 'react-router-dom';


function FilteredPage() {

    let { id, id2, id3, id4 } = useParams()

    let getLS = JSON.parse(localStorage.getItem("persons")) || []
    let filtered = []

    getLS.map((a)=>{
        if (a.name.includes(id.split("-").join("")) && a.age.includes(id2.split("-").join("")) && a.country.includes(id3.split("-").join("")) && a.gender.includes(id4.split("-").join(""))) {
            filtered.push(a)
        } else {console.log("not match")}
    })


    return (
        <div className="App">
            FİLTERED LİST

            {filtered.map((a, index) => (
                <ul key={index}>
                    <li><b>{a.name}</b></li>
                    <li>age:{a.age}</li>
                    <li>country:{a.country}</li>
                    <li>gender:{a.gender}</li>
                </ul>
    ))}

            <button onClick={() => window.location.href = '/'}>Go homepage</button>
            <button onClick={() => window.location.href = '/filter'}>Go filter</button>

        </div>
    );
}

export default FilteredPage;
