import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #ecede8;
`;

export const ScrollView = styled.ScrollView`
    padding-top: 5%;
    flex: 1.7;
    width: 100%;
    height: 100%;
`;

export const Container = styled.View`
    flex: 0.3;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContainerSpaceBottom = styled.View`
    height: 5%;
    width: 100%;
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
    font-weight: 600;
`;
