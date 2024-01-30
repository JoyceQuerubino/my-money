import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`

export const Content = styled.ScrollView`
    flex: 1;
    padding: 0 24px;
`
export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const MonthSelect = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
`

export const MonthButton = styled.TouchableOpacity``;

export const MonthIcon = styled(Feather)`
    font-size: 20px;
`

export const Month = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`