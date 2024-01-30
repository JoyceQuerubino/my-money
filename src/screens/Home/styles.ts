import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
`;

export const ContainerList = styled.View`
    flex: 1;
    width: 100%;
`;

export const ContainerBanners = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
`;