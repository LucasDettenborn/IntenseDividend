import React from 'react';
import { Text } from 'react-native';
import { KeyboardView, ScrollView, Container, ButtonSubmit, TextButton } from './styles';
import AnalysisResult from '../../components/AnalysisResult';

const NavigationToSignin = props => {
    props.navigation.navigate('SignIn');
}

const NewAnalysis = props => {
    return (
        <>
            <KeyboardView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <ScrollView>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                    <Text style={{ padding: 10, fontSize: 95}}>TEST</Text>
                </ScrollView>
                <Container>
                    <ButtonSubmit onPress={() => NavigationToSignin(props)}>
                        <TextButton>Analisar
                        </TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>

        </>


    )
}

export default NewAnalysis;