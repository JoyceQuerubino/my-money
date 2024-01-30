import React from 'react';

import { 
    Container, 
    ContainerTop, 
    Name, 
    Tag, 
    TagTitle, 
    Value, 
    ContainerBottom,
    Date, 
    CategoryTitle,
    CardTypes 
} from './styles';

export interface TransactionCardProps {
    name: string;
    type: CardTypes; 
    value: string; 
    category?: string; 
    date: string;
}

export function TransactionCard({name, type, value, category, date }: TransactionCardProps){

    const typeName = type === "up" ? "Entrada" : "Saída"

    return(
        <Container>
            <ContainerTop>
                <Name>{name}</Name>
                <Tag type={type}>
                    <TagTitle>{typeName}</TagTitle>
                </Tag>
            </ContainerTop>
            <Value type={type}>{value}</Value>
            <ContainerBottom>
                <CategoryTitle>{category}</CategoryTitle>
                <Date>{date}</Date>
            </ContainerBottom>
          
        </Container>
    )
}