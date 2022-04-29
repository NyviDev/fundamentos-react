import '../Contador.css'
import React, {useState} from "react";

const Contador = (props) => {

    const [numero, setNumero] = useState(props.numeroInicial || 0)
    const [passo, setPasso] = useState(props.passoInicial || 2)

    function quandoMudarPasso(e) {
        setPasso(+e.target.value)
    }

    function inc() {
        setNumero(numero + passo)
    }

    function dec() {
        setNumero(numero - passo)
    }
    return (
        <div className="Contador">
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <div>
                <label htmlFor="passoInput"></label>
                <input id="passoInput" type="number" value={passo} onChange={quandoMudarPasso}/>
            </div>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            </div>
    )
}

export default Contador