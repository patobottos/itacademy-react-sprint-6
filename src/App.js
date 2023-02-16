import React from 'react';
import { useState } from 'react';
import Presentacio from "./components/presentacio/Presentacio";
import { GlobalStyle } from './components/globalStyles/GlobalStyle';
import ButtonSet from "./components/botons/Boto";
import { Paragraph } from "./components/escenes/Escena.styled";
import { data } from './data/data';

export default function App() {

    const [hasStarted, setHasStarted] = useState(true);

    const [counter, setCounter] = useState(0);

    const handleStart = () => {setHasStarted(true);}

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
            {hasStarted ? (
                <div>
                    <GlobalStyle 
                        link={data[counter].img}
                    />

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