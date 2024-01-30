import React from 'react';
import { Container, Title, SmallButtonTypes } from './styles';

interface SmallButtonPorps {
    title: string; 
    type: SmallButtonTypes;
    onPress: () => void; 
    isSelected: boolean;
}

export function SmallButton({ title, type, onPress, isSelected }: SmallButtonPorps){
    return(
        <Container type={type} onPress={onPress} isSelected={isSelected}> 
            <Title>{title}</Title>
        </Container>
    )
}