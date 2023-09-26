import './App.css';
import React from 'react';
import './App.css';


function All() {
    let allArr= JSON.parse(localStorage.getItem("key"))
    let DOLLAR= JSON.parse(localStorage.getItem("dollar"))
    console.log(allArr)
    return (
        <div className='App'>
            {allArr.map((e)=>(<p>${e} = {e*DOLLAR} TRY </p>)
            )}
        </div>
    );
}

export default All;
