import React from 'react';
import { WelcomeScreen } from './Presentacio.styled';
import { WelcomeText } from './Presentacio.styled';
import { WelcomeButton } from './Presentacio.styled';

export default function Presentacio({handleStart}) {
    return (
        <WelcomeScreen>
                    <WelcomeText>
                        En aquest lliurament posarem en pràctica els conceptes bàsics apresos de React.
                    </WelcomeText>
                    <WelcomeText>
                        Un/a client/a que té com a producte principal una web de gestió empresarial desenvolupada amb React, ens ha demanat que desenvolupem un tutorial, en el qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.
                    </WelcomeText>
                    <WelcomeButton onClick={handleStart}>Començar</WelcomeButton>

        </WelcomeScreen>
    )
}
