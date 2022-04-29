import '../Contador.css'
import React, {useState} from "react";

import Display from './Display';
import PassoForm from '../classe/PassoForm';
import Botoes from '../classe/Botoes';

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
            <Display numero={numero}></Display>
            <PassoForm passo={passo} setPasso={quandoMudarPasso}></PassoForm>
            <Botoes inc={inc} dec={dec}></Botoes>
            </div>
    )
}

export default Contador