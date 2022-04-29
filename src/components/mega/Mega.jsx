import './Mega.css'
import React, {useState} from "react"

const Mega = (props) => {
    function gerarNumerosNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return array.includes(aleatorio) ? gerarNumerosNaoContido(min, max, array) : aleatorio
    }
    
    function gerarNumero(qtde) {
        const numeros = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumerosNaoContido(1, 61, nums)
            console.log([...nums, novoNumero])
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)
    
        return numeros
    }
    
    const [qtde, setqtde] = useState(props.quantidadeInicial || 6)
    const numerosIniciais = gerarNumero(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>qtd de Números</label>
                <input type="number" value={qtde} onChange={e => setqtde(+e.target.value)}/>
            </div>
            <button onClick={e => setNumeros(gerarNumero(qtde))}>Gerar Números</button>
        </div>
    )
}

export default Mega
