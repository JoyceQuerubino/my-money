import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons"

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
    flex: 1;
    padding: 0 24px;
`
export const Category = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    flex-direction: row;
    padding: 24px 0;
`
export const Icon = styled(Feather)`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    margin-right: 16px;
`

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color:  ${({ theme }) => theme.COLORS.DARK_TEXT};;
`;

export const Name = styled.Text`
    ${({theme}) => css `
        color: ${theme.COLORS.DARK_TEXT};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family ${theme.FONT_FAMILY.BOLD};
    `}
`;