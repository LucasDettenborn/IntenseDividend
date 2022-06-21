import React, { useState } from 'react';
import {
    KeyboardView,
    ScrollView,
    Container,
    ContainerSpaceBottom,
    ButtonSubmit,
    TextButton,
} from './styles';
import { AnalysisResult } from '../../components/AnalysisResult';
import DividendAnalysis from '../../services/DividendAnalysis';
import DividendAnalysisResult from '../../services/DividendAnalysisResult';

export default function AnalysisResultPage({ navigation, route }) {
    const [dataToAnalysis, setSataToAnalysis] = useState(
        route.params.dataToAnalysis
    );
    const [reportDate, setReportDate] = useState(new Date());

    const NavigationToHome = () => {
        navigation.navigate('Home');
    };

    const saveDividendAnalysisResult = () => {
        //Primeiro cria o dado na tabela agrupador, depois o dados na tabela de baixo
        let successSaveMessage = 'Os dados foram salvos com sucesso';

        if (dataToAnalysis != null && dataToAnalysis != undefined) {
            dataToAnalysis.map((d) =>
                DividendAnalysis.create({ reportDate })
                    .then(function (responseDA) {
                        if (responseDA != null && responseDA != undefined) {
                            DividendAnalysisResult.create({
                                d,
                                responseDA,
                            })
                                .then(function (responseDAR) {
                                    if (
                                        responseDAR != null &&
                                        responseDAR != undefined
                                    ) {
                                        alert(successSaveMessage);
                                        NavigationToHome();
                                    } else {
                                        alert('error');
                                    }
                                })
                                .catch((e) => console.log(e));
                        }
                    })
                    .catch((e) => alert(e))
            );
        }

        /*DividendAnalysis.find(1)
            .then(function (result) {
                console.log('\nDividendAnalysis =>', result);
            })
            .catch(() => alert('Dado não encontrado!'));
        DividendAnalysisResult.find(1)
            .then(function (result) {
                console.log('DividendAnalysisResult=> ', result);
            })
            .catch(() => alert('Dado não encontrado!'));*/
    };

    return (
        <>
            <KeyboardView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    {dataToAnalysis != null && reportDate != null ? (
                        dataToAnalysis.map((d) => (
                            <AnalysisResult dateReport={reportDate} data={d} />
                        ))
                    ) : (
                        <TextButton>Não tem dados a ser carregado</TextButton>
                    )}
                    <ContainerSpaceBottom />
                </ScrollView>
                <Container>
                    <ButtonSubmit onPress={() => saveDividendAnalysisResult()}>
                        <TextButton>Finalizar análise</TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>
        </>
    );
}

export { AnalysisResultPage };
