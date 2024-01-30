import React from 'react';

import { Container, Title, Content, Value, Icon, BannerTypes } from './styles';

interface BannerPorps {
    title: string, 
    type: BannerTypes, 
    value: string,
}

export function Banner({title, type, value }: BannerPorps){
    return(
        <Container type={type}> 
            <Title>{title}</Title>

            <Content>
                <Icon type={type}/>
                <Value>{value}</Value>
            </Content>
        </Container>
    )
}