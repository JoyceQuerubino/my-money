import styled, { css } from "styled-components/native";

export type CardTypes = 'up' | 'down';

export type CardProp = {
    type: CardTypes
}

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    padding: 16px;
    margin-bottom: 16px;
    border-radius:6px;
`;

export const  ContainerTop = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Tag = styled.View<CardProp>`
    align-items: center;
    justify-content: center;
    padding: 4px 16px;
    border-radius: 500px;
    background-color:  ${({ theme, type }) => type === 'up' ? theme.COLORS.PRIMARY : theme.COLORS.DOWN };
` 
export const  ContainerBottom = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
`

export const Name = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.DARK_TEXT}
    `}
`;

export const TagTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.LIGHT}
    `}
`
export const  Value = styled.Text<CardProp>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        color: ${type === 'up' ? theme.COLORS.PRIMARY : theme.COLORS.DOWN };
    `}
` 
export const  Date = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.DARK_TEXT}
    `}
` 
export const CategoryTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.DARK_TEXT}
    `}
`


