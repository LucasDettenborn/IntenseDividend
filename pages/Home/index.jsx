import React from 'react';
import { Image, Text } from 'react-native';
import { KeyboardView, ScrollView, Container, ButtonSubmit, TextButton } from './styles';
import AnalysisResult from '../../components/AnalysisResult';

const NavigationToSignin = props => {
    props.navigation.navigate('SignIn');
}

const Home = props => {
    return (
        <>
            <KeyboardView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <ScrollView>
                    <AnalysisResult></AnalysisResult>
                    <AnalysisResult></AnalysisResult>
                    <Text style={{ fontSize: 80 }}>Framework around?</Text>
                    <Text style={{ fontSize: 80 }}>Framework around?</Text>
                </ScrollView>
                <Container>
                    <ButtonSubmit onPress={() => NavigationToSignin(props)}>
                        <TextButton>Nova análise
                        </TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>

        </>


    )
}

export default Home;