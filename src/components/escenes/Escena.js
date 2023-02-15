import React from 'react';
import { Paragraph } from './Escena.styled';


export default function Escena({isActive, item}) {    
//console.log(props);
//console.log('props item id', props.item.id);

    return(        
        <Paragraph
        key={item.id}
        isActive={isActive}
        >
            {item.text}
        </Paragraph>
    )
}
