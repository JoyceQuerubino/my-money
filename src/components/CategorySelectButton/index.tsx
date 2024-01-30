import React from 'react';
import { Container, Title, Icon} from './styles';

interface CategorySelectButtonPorps {
    title: string, 
    onPress: () => void;
}

export function CategorySelectButton({title, onPress }: CategorySelectButtonPorps){
    return(
        <Container onPress={onPress}> 
            <Title>{title}</Title>
            <Icon/>
        </Container>
    )
}