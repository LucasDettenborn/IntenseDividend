import React from 'react';
import { Image } from 'react-native';
import {
    ContainerImage,
    ContainerTitle,
    ContainerSubTitle,
    Container,
    ButtonSubmit,
    TextButton,
    Title,
    SubTitle,
} from './styles';
import BackgroundFirstScreen from '../../assets/preLogin.png';

const NavigationToSignin = (props) => {
    props.navigation.navigate('SignIn');
};

const PreSignin = (props) => {
    return (
        <>
            <ContainerImage>
                <Image source={BackgroundFirstScreen} />
            </ContainerImage>
            <ContainerTitle>
                <Title>Intense{'\n'}Dividend</Title>
            </ContainerTitle>
            <ContainerSubTitle>
                <SubTitle>
                    Construindo um futuro sólido pela renda passiva
                </SubTitle>
            </ContainerSubTitle>
            <Container>
                <ButtonSubmit onPress={() => NavigationToSignin(props)}>
                    <TextButton>Começar</TextButton>
                </ButtonSubmit>
            </Container>
        </>
    );
};

export default PreSignin;
