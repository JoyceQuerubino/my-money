import React from 'react';

import { Container, LoadIndicator } from './styles';

interface LoadingTypes {
    background: string;
    loadColor:string;
}

export function Loading({ background, loadColor }: LoadingTypes){
    return(
        <Container background={background}> 
            <LoadIndicator loadColor={loadColor}/>
        </Container>
    )
}