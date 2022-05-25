import React from 'react';
import { KeyboardView, ScrollView, Container, ButtonSubmit, TextButton } from './styles';
import AnalysisResult from '../../components/AnalysisResult';
import HeaderWithSearch from '../../components/HeaderWithSearch';

const NavigationToSignin = props => {
    props.navigation.navigate('SignIn');
}

const Home = props => {
    return (
        <>
            <KeyboardView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <Container>
                    <HeaderWithSearch></HeaderWithSearch>
                </Container>
                <ScrollView>
                    <AnalysisResult></AnalysisResult>
                    <AnalysisResult></AnalysisResult>
                    <AnalysisResult></AnalysisResult>
                    <AnalysisResult></AnalysisResult>
                    <AnalysisResult></AnalysisResult>
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