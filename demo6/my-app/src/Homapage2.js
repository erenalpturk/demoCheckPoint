import { useState } from 'react';

function Homepage2() {
    const [num, setNum] = useState(0)

    let arrLS = JSON.parse(localStorage.getItem("key")) || []
    let arr = []

    const toLS = () => {
        arr.push(num)
        localStorage.setItem("key", JSON.stringify(arr));
    }

    if (arrLS !== null) {
        arr = [...arrLS]
    }

    return (
        <div>
            HOMEPAGE
            <input onChange={(e) => { setNum(e.target.value) }} type='number'></input>
            <button onClick={()=>{toLS();window.location.href = `/dynamic/${num}`}} >Click here</button>
            <button onClick={()=>{toLS();window.location.href = `/all`}} >History</button>
        </div>
    );
}

export default Homepage2;
