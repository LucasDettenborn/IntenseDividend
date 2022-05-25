import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 15px;
    width: 90%;
`

export const Title = styled.Text`
    font-size: 26px;
    color: red;
    background-color: blue;
    margin-bottom: 5px;
`

export const Input = styled.TextInput`
    width: 90%;
    font-size: 20px;
    margin-bottom: 2px;
    padding: 10px 10px ;
    color: #E4E6D9;
`
export const InputBottonLine = styled.View`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 2px;
    background-color: #253528;
    margin-bottom: 10px;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #253528;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    width: 90%;
    padding: 15px;
    margin-top: 15px ;
`

export const TextButton = styled.Text`
    color: #E4E6D9;
    font-size: 20px ;
    font-weight: 700 ;
    
`

export const Action = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    width: 90%;
    padding: 5px;
    margin-top: 5px;
`

export const ActionText = styled.Text`
    color: #E4E6D9;
    font-size: 20px ;
`

