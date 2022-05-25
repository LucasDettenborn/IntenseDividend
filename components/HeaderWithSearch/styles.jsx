import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
    width: 100%;
    background-color: #FFFFFF;
`

export const ContainerSearch = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
    width:100%;
    height:100%;
    border-radius: 10px;
    border-color: #253528;
    border-width: 1.5px;
`

export const InputSearch = styled.TextInput`
    height: 100%;
    width: 85%;
    font-size: 18px;
    padding: 10px 10px ;
    color: #C4C4C4;
`

export const ButtonSearch = styled.TouchableOpacity`
    height: 100%;
    width: 15%;
    align-items: center;
    justify-content: center;
`

export const Row1 = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 62%;
`

export const Row2 = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38%;
`

export const SubSearchCol1 = styled.View`
    align-items: flex-end;
    justify-content: flex-end;
    width: 20%;
    height: 100%;
`
export const SubSearchCol2 = styled.View`
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    height: 100%;
`

export const Text = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #253528;
`



