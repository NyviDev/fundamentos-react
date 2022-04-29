import React from "react"

const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passoInput"></label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={props.setPasso}
            />
        </div>
    )
}

export default PassoForm