import React, { useState } from 'react';
import {
    KeyboardView,
    ScrollView,
    Container,
    ButtonSubmit,
    TextButton,
} from './styles';
import AnalysisResult from '../../components/AnalysisResult';
import HeaderWithSearch from '../../components/HeaderWithSearch';
import DividendAnalysis from '../../services/DividendAnalysis';
import DividendAnalysisResult from '../../services/DividendAnalysisResult';

const NavigationToSignin = (props) => {
    props.navigation.navigate('SignIn');
};

const Home = (props) => {
    const [dataFromDividendAnalysis, setDataFromDividendAnalysis] = useState(
        loadDataFromDividendAnalysis()
    );
    const [dataFromDividendAnalysisResult, setDataFromDividendAnalysisResult] =
        useState(loadDataFromDividendAnalysisResult());

    const loadDataFromDividendAnalysis = () => {
        DividendAnalysis.all()
            .then((o) => setDataFromDividendAnalysis(o))
            .catch(
                'Não foi possível carregar os dados da tabela DividendAnalysis'
            );
    };

    const loadDataFromDividendAnalysisResult = () => {
        DividendAnalysisResult.all()
            .then((o) => setDataFromDividendAnalysisResult(o))
            .catch(
                'Não foi possível carregar os dados da tabela DividendAnalysisResult'
            );
    };

    return (
        <>
            <KeyboardView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <Container>
                    <HeaderWithSearch></HeaderWithSearch>
                </Container>
                <ScrollView>
                    {dataFromDividendAnalysis != null ? (
                        dataFromDividendAnalysis.map((d) =>
                            dataFromDividendAnalysisResult != null ? (
                                dataFromDividendAnalysisResult.map((d2) => (
                                    <AnalysisResult
                                        dateReport={d.reportDate}
                                        data={d2}
                                    />
                                ))
                            ) : (
                                <TextButton>
                                    Não tem dados a ser carregado
                                </TextButton>
                            )
                        )
                    ) : (
                        <TextButton>Não tem dados a ser carregado</TextButton>
                    )}
                </ScrollView>
                <Container>
                    <ButtonSubmit onPress={() => NavigationToSignin(props)}>
                        <TextButton>Nova análise</TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>
        </>
    );
};

export default Home;
