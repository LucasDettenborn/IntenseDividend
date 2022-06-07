import React from 'react';
import {
    KeyboardView,
    ScrollView,
    Container,
    ContainerSpaceBottom,
    ButtonSubmit,
    TextButton,
} from './styles';
import { AnalysisResult } from '../../components/AnalysisResult';

const NavigationToHome = () => {
    navigation.navigate('Home');
};

export default function AnalysisResultPage({ route }) {
    const { dataToAnalysis } = route.params;
    return (
        <>
            <KeyboardView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    {dataToAnalysis != null ? (
                        dataToAnalysis.map((d) => (
                            <AnalysisResult
                                dateReport={'06/06/2022'}
                                data={d}
                            />
                        ))
                    ) : (
                        <TextButton>Não tem dados a ser carregado</TextButton>
                    )}
                    <ContainerSpaceBottom />
                </ScrollView>
                <Container>
                    <ButtonSubmit onPress={() => NavigationToHome(props)}>
                        <TextButton>Finalizar análise</TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>
        </>
    );
}

export { AnalysisResultPage };
