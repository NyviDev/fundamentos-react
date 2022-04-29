import './App.css'
import React from "react"

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProduto from './components/repeticao/TabelaProduto';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/classe/Contador';
import ContadorFuncao from './components/contador/funcao/ContadorFuncao';
import Mega from './components/mega/Mega'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo='#14 - MegaSenha' color="#FA6900">
                <Mega quantidadeIncial={5}></Mega>
            </Card>

            <Card titulo='#13 - Contador em Função' color="#FA6900">
                <ContadorFuncao numeroInicial={10}></ContadorFuncao>
            </Card>

            <Card titulo='#12 - Contador em Classe' color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo='#11 - Componente Controlado (input)' color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo='#10 - Comunicação Indireta' color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo='#09 - Comunicação Direta' color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#08 - Renderização Condição' color="#982395">
                <ParOuImpar numero = {20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo></UsuarioInfo>
            </Card>

            <Card titulo='#07 - Desafio Repetição' color="#FA6900">
                <TabelaProduto />                
            </Card>

            <Card titulo='#06 - Lista de Alunos' color='#FF3C65'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color='#00C8F8'>
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color='#FA6900'>
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color='#E94C6F'>
                <Fragmento />
            </Card>

            <Card titulo="#02 - Componente com Paramêtro" color='#E8B71A'>
                <ComParametro
                    titulo='Situação do Aluno'
                    nome='Pedro'
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color='#588C73'>
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>