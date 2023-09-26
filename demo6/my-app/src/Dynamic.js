import { BrowserRouter as Router, Route, Link, useParams, Routes } from 'react-router-dom';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';



const Dynamic = () => {
    let { ahmet } = useParams();
    const [usdAmount, setUsdAmount] = useState(ahmet);
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://open.er-api.com/v6/latest/USD');
            setExchangeRate(response.data.rates.TRY);
            localStorage.setItem("dollar", response.data.rates.TRY)
        }
        fetchData();
    }, []);

    const tlAmount = useMemo(() => {
        if (exchangeRate === null) {
            return 'Bekleniyor...';
        }
        return (usdAmount * exchangeRate).toFixed(2);
    }, [usdAmount, exchangeRate]);

    return (
        <div>
            <h1>Dynamic Route</h1>
            <p>ID: {ahmet}</p>
            <div>
                <div>
                    <h1>Döviz Çevirici</h1>
                    <p>Dolar Miktarı: ${usdAmount}</p>
                    <p>TL Değeri: {tlAmount} ₺</p>
                </div>
            </div>
            <button onClick={() => { window.location.href = `/` }}>Go Home</button>
        </div>
    );
};

export default Dynamic;