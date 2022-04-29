import './TabelaProdutos.css'
import React from "react";
import produtos from "../../data/produtos";

export default props => {
    const tabela = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>{tabela}</tbody>
            </table>
        </div>
    )
}