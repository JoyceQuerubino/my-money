import React from 'react';

import { Container, Title } from './styles';

interface TotalProps {
    value: string
}

export function Total({value}: TotalProps){
    return(
        <Container> 
            <Title>{value}</Title>
        </Container>
    )
}