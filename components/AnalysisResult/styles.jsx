import styled from "styled-components/native";

export const ContainerAround = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 200;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const Container = styled.View`
    margin-top: 10px ;
    margin-bottom: 10px ;
    width: 92%;
    height: 100%;
    border-radius: 10px;
    background-color: blue;
    
`
export const Divider = styled.View`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 2px;
    background-color: #253528;
    margin-bottom: 10px;
`

export const Row = styled.View`
    margin-top: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 35%;
    background-color: blueviolet;
`

export const BoxImage = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 25%;
    background-color: red;
`

export const BoxDate = styled.View`
    height: 100%;
    width: 75%;
    align-items: flex-start;
    justify-content: center;
    background-color: gray;
`

export const TextDate = styled.Text`
    font-size: 15px;
    font-weight: 700;
`
