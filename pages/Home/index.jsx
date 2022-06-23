import React, { useState, useEffect } from 'react';
import {
    KeyboardView,
    ScrollView,
    Container,
    ButtonSubmit,
    TextButton,
} from './styles';
import { AnalysisResult } from '../../components/AnalysisResult';
import HeaderWithSearch from '../../components/HeaderWithSearch';
import DividendAnalysis from '../../services/DividendAnalysis';
import DividendAnalysisResult from '../../services/DividendAnalysisResult';
import moment from 'moment';

const NavigationToNewAnalysis = (props) => {
    props.navigation.navigate('NewAnalysis');
};

const Home = (props) => {
    const loadDataFromDividendAnalysis = () => {
        DividendAnalysis.all()
            .then(function (o) {
                setDataFromDividendAnalysis([...dataFromDividendAnalysis, o]);
            })
            .catch(
                'Não foi possível carregar os dados da tabela DividendAnalysis'
            );
    };

    const loadDataFromDividendAnalysisResult = () => {
        DividendAnalysisResult.all()
            .then(function (o) {
                setDataFromDividendAnalysisResult([
                    ...dataFromDividendAnalysisResult,
                    o,
                ]);
            })
            .catch(
                'Não foi possível carregar os dados da tabela DividendAnalysisResult'
            );
    };

    const [dataFromDividendAnalysis, setDataFromDividendAnalysis] = useState(
        []
    );
    const [dataFromDividendAnalysisResult, setDataFromDividendAnalysisResult] =
        useState([]);

    useEffect(() => {
        if (
            dataFromDividendAnalysis == null ||
            dataFromDividendAnalysis.length == 0
        ) {
            loadDataFromDividendAnalysis();
        }

        console.log('dataFromDividendAnalysis=>  ', dataFromDividendAnalysis);
    }, [dataFromDividendAnalysis]);

    useEffect(() => {
        if (
            dataFromDividendAnalysisResult == null ||
            dataFromDividendAnalysisResult.length == 0
        ) {
            loadDataFromDividendAnalysisResult();
        }

        console.log(
            '\ndataFromDividendAnalysisResult=>  ',
            dataFromDividendAnalysisResult
        );
    }, [dataFromDividendAnalysisResult]);

    const [search, setSearch] = useState('');

    return (
        <>
            <Container>
                <HeaderWithSearch setdata={setSearch}></HeaderWithSearch>
            </Container>
            <KeyboardView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    {console.log(
                        '\n\ndataFromDividendAnalysis.length=> ',
                        dataFromDividendAnalysis[0].length
                    )}
                    {console.log(
                        '\n\ndataFromDividendAnalysisResult.length=> ',
                        dataFromDividendAnalysisResult[0].length
                    )}
                    {dataFromDividendAnalysis[0] != null &&
                    dataFromDividendAnalysis[0].length > 1 &&
                    dataFromDividendAnalysisResult[0] != null &&
                    dataFromDividendAnalysisResult[0].length > 1 ? (
                        dataFromDividendAnalysis[0].map((d) =>
                            dataFromDividendAnalysisResult[0].map((d2) => {
                                console.log('aqui =======');
                                var o = moment(
                                    d.reportDate,
                                    'DD/MM/YYYY HH:mm:ss'
                                ).format('DD-MM-YYYY');
                                if (search == '' || o.includes(search)) {
                                    return (
                                        <AnalysisResult
                                            dateReport={d.reportDate}
                                            data={d2}
                                        />
                                    );
                                }
                            })
                        )
                    ) : (
                        <TextButton>Não tem dados a ser carregado</TextButton>
                    )}
                </ScrollView>
                <Container>
                    <ButtonSubmit
                        onPress={() => NavigationToNewAnalysis(props)}
                    >
                        <TextButton>Nova análise</TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>
        </>
    );
};

export default Home;
