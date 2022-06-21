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
        // else {
        //     console.log('dataFromDividendAnalysis', dataFromDividendAnalysis);
        //     console.log(
        //         'dataFromDividendAnalysis.length ',
        //         dataFromDividendAnalysis.length
        //     );
        // }
    }, [dataFromDividendAnalysis]);

    useEffect(() => {
        if (
            dataFromDividendAnalysisResult == null ||
            dataFromDividendAnalysisResult.length == 0
        ) {
            loadDataFromDividendAnalysisResult();
        }
        // else {
        //     console.log(
        //         'dataFromDividendAnalysisResult',
        //         dataFromDividendAnalysisResult
        //     );
        //     console.log(
        //         'dataFromDividendAnalysisResult.lengt ',
        //         dataFromDividendAnalysisResult.length
        //     );
        // }
    }, [dataFromDividendAnalysisResult]);

    const [search, setSearch] = useState('');

    return (
        <>
            <KeyboardView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <Container>
                    <HeaderWithSearch setdata={setSearch}></HeaderWithSearch>
                </Container>
                <ScrollView>
                    {dataFromDividendAnalysis.length > 0 &&
                    dataFromDividendAnalysisResult.length > 0 ? (
                        dataFromDividendAnalysis.map((d) =>
                            dataFromDividendAnalysisResult.map((d2) => {
                                var o = moment(
                                    d[0].reportDate,
                                    'DD/MM/YYYY HH:mm:ss'
                                ).format('DD-MM-YYYY');
                                if (search == '' || o.includes(search)) {
                                    return (
                                        <AnalysisResult
                                            dateReport={d[0].reportDate}
                                            data={d2[0]}
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
