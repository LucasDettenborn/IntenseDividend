import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #ecede8;
`;

export const ScrollView = styled.ScrollView`
    padding-top: 10px;
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const Container = styled.View`
    flex: 0.2;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.Text`
    align-items: flex-start;
    font-size: 38px;
    font-weight: 700;
    color: #ffffff;
    margin-left: 5%;
    line-height: 55px;
`;
export const ContainerSubTitle = styled.View`
    flex: 0.1;
    align-items: flex-start;
    justify-content: center;
`;
export const SubTitle = styled.Text`
    font-size: 16px;
    color: #ffffff;
    margin-left: 5%;
`;
export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #253528;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    width: 90%;
    padding: 15px;
`;
export const TextButton = styled.Text`
    color: #e4e6d9;
    font-size: 20px;
    font-weight: 700;
`;
