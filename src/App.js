import React from 'react';
import { useState } from 'react';
import Presentacio from "./components/presentacio/Presentacio"
import ButtonSet from "./components/botons/Boto";
import { Paragraph } from "./components/escenes/Escena.styled";
import { data } from './data/data'


export default function App() {

    const [haComenzado, setHaComenzado] = useState(false);

    const [counter, setCounter] = useState(0);

    const handleStart = () => {setHaComenzado(true);}

    const handleMinus = () => {
        setCounter(counter <= 0 ? 3 : counter - 1);
    }

    const handlePlus = () => {
        setCounter(counter >= 3 ? 0 : counter + 1);
    }

    const escenes = data.map((item, i) => {
        return (
            <Paragraph
                key={item.id}
                item={item}
                isActive={counter === i}
            >
                {item.text}
            </Paragraph>
        );
    });


    return(
        <div>
            {haComenzado ? (
                <div>
                    <ButtonSet 
                        handleMinus={handleMinus} 
                        handlePlus={handlePlus}
                    />
                    {escenes}
                </div>
            ) : (
                <div>
                    <Presentacio 
                        handleStart={handleStart}
                    />
                </div> 
            )}
        </div>
    )
}