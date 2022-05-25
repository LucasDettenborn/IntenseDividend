import styled from "styled-components/native";

export const ContainerAround = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    max-height: 230px;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const Container = styled.View`
    margin-top: 10px ;
    margin-bottom: 10px ;
    width: 92%;
    height: 100%;
    border-radius: 10px;
    background-color: #FFFFFF;   
`

export const ContainerHeaderCol1 = styled.View`
    padding-left: 5px;
    width: 40%;
    height: 100%; 
`
export const ContainerHeaderCol2 = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 5px;
    width: 60%;
    height: 100%;   
`

export const Divider = styled.View`
    margin-left: 5%;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 2px;
    background-color: #253528;
`

export const Row = styled.View`
    margin-left: 5%;
    margin-top: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    height: 20%;
`

export const Row2 = styled.View`
    margin-left: 5%;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    height: 25%;
`

export const BoxImage = styled.View`
    margin-top: 2%;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 20%;
`

export const BoxDate = styled.View`
    height: 100%;
    width: 80%;
    align-items: flex-start;
    justify-content: center;
`

export const TextDate = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #253528;
`

export const TextBeforeHeader = styled.Text`
    padding-top: 5px;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-weight: 600;
    color: #253528;
`

export const TextHeader = styled.Text`
    padding-top: 5px;
    font-size: 15px;
    height: 100%;
    font-weight: 700;
    color: #C0CFB2;
`

export const TextAfterHeader = styled.Text`
    padding-top: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #253528;
`
