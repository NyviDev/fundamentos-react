import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {

    return (
        <div>
            <DiretaFilho 
            nome="Robson"
            idade={54}
            bool={true}></DiretaFilho>
            <br />
            <DiretaFilho 
            nome="Maria"
            idade={12}
            bool={false}></DiretaFilho>
        </div>
    )

}