import React from 'react';

import { BtnContainer, MainBtn } from './Boto.styled';


export default function ButtonSet({handleMinus, handlePlus}) {
    return (
        <BtnContainer>
            <MainBtn onClick={handleMinus}>Anterior</MainBtn>
            <MainBtn onClick={handlePlus}>Següent</MainBtn>
        </BtnContainer>
    )
}