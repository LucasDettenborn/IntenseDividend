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

const NavigationToHome = () => {
    navigation.navigate('Home');
};

export default function AnalysisResultPage({ route }) {
    const { dataToAnalysis } = route.params;
    const [reportDate, setReportDate] = useState(new Date());

    const saveDividendAnalysisResult = () => {
        //Primeiro cria o dado na tabela agrupador, depois o dados na tabela de baixo
        let successSaveMessage = 'Os dados foram salvos com sucesso';
        let errorSaveMessage = 'Não foi possível salvar os dados da análise';

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
                                        //() => NavigationToHome(props);
                                    } else {
                                        alert(errorSaveMessage);
                                    }
                                })
                                .catch(() => alert(errorSaveMessage));
                        }
                    })
                    .catch(() => alert(errorSaveMessage))
            );
        }
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
                    <ButtonSubmit
                        onPress={() => saveDividendAnalysisResult(props)}
                    >
                        <TextButton>Finalizar análise</TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>
        </>
    );
}

export { AnalysisResultPage };
