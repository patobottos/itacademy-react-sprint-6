import React from 'react';
import { Paragraph } from './Escena.styled';


export default function Escena(props, counter) {    
//console.log(props);
//console.log('props item id', props.item.id);

    return(        
        <Paragraph
        key={props.item.id}
        >
            {props.item.text}
        </Paragraph>
    )
}
