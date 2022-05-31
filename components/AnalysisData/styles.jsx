import styled from "styled-components/native";

export const ContainerAround = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const Container = styled.View`
    align-items: center;
    justify-content: center;
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

export const Row = styled.View`
    margin-left: 5%;
    margin-top: 5%;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
`

export const Text = styled.Text`
    width: 90%;
    font-size: 20px;
    font-weight: 600;
    color: #253528;
`

export const TextHeader = styled.Text`
    height: 100%;
    font-size: 15px;
    font-weight: 700;
    color: #C0CFB2;
`

export const TextHeader2 = styled.Text`
    height: 100%;
    margin-left: 4%;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    color: #253528;
`

export const TextAfterHeader = styled.Text`
    padding-top: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #253528;
`

export const Required = styled.Text`
    align-items: center;
    justify-content: center ;
    padding: 0px 12px;
    width: 90%;
    font-size: 17px;
    font-weight: 700;
    color: red;
`
export const Divider = styled.View`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 2px;
    background-color: #253528;
    margin-top: 3%;
    margin-bottom: 3%;
`