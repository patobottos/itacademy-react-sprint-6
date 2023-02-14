import React from "react";
import { useState } from 'react';
import ButtonSet from "./components/botons/Boto";
import Escena from './components/escenes/Escena';
import { data } from './data/data'


export default function App() {

    const [counter, setCounter] = useState(1);
    const [selected, setSelected] = useState(false);

    const handleMinus = () => {
        counter <= 1 ? setCounter(4) : setCounter(counter - 1);
        counter == data.length ? setSelected(true) : setSelected(false);
        console.log('selected?',selected);
    }

    const handlePlus = () => {
        counter >= 4 ? setCounter(1) : setCounter(counter + 1);
        counter == data.length ? setSelected(true) : setSelected(false);
        console.log('selected?',selected);
    }

    const escenes = data.map(item => {
        return (
            <Escena
                key={item.id}
                item={item}
            />
        );
    });


    return(
        <div>
            <ButtonSet handleMinus={handleMinus} handlePlus={handlePlus}/>

            <h3 className="counter">
                {counter}
            </h3>

            <div className="scenes-container">
                {escenes}
            </div>

        </div>
    )
}