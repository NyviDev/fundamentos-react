import './Input.css'
import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState('Inicio')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <h2>{valor}</h2>
            <div className='flex'>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}