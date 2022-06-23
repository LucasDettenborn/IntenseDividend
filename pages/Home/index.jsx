import React, { useState, useEffect, Component } from 'react';
import {
    KeyboardView,
    ScrollView,
    Container,
    ButtonSubmit,
    TextButton,
} from './styles';
import AnalysisResult from '../../components/AnalysisResult';
import HeaderWithSearch from '../../components/HeaderWithSearch';
import DividendAnalysisResult from '../../services/DividendAnalysisResult';
import moment from 'moment';

const NavigationToNewAnalysis = (props) => {
    props.navigation.navigate('NewAnalysis');
};

const Home = (props) => {
    const loadDataFromDividendAnalysisResult = () => {
        DividendAnalysisResult.all()
            .then(function (o) {
                setDataFromDividendAnalysisResult([
                    ...dataFromDividendAnalysisResult,
                    o,
                ]);
                setDataFromDividendAnalysisResultIsLoaded(true);
            })
            .catch(
                'Não foi possível carregar os dados da tabela DividendAnalysisResult'
            );
    };

    const [dataFromDividendAnalysisResult, setDataFromDividendAnalysisResult] =
        useState([]);
    const [
        dataFromDividendAnalysisResultIsIsLoaded,
        setDataFromDividendAnalysisResultIsLoaded,
    ] = useState(false);

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
                    {dataFromDividendAnalysisResultIsIsLoaded == true ? (
                        dataFromDividendAnalysisResult[0].map((d2) => {
                            var o = moment(
                                d2.reportDate,
                                'DD/MM/YYYY HH:mm:ss'
                            ).format('DD-MM-YYYY');
                            if (search == '' || o.includes(search)) {
                                return (
                                    <AnalysisResult
                                        dateReport={d2.reportDate}
                                        data={d2}
                                        id={d2.id}
                                    />
                                );
                            }
                        })
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
