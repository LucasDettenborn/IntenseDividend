import React, { useState } from 'react';
import {
    KeyboardView,
    ScrollView,
    Container,
    ContainerForBtnAdd,
    ButtonSubmit,
    ButtonAdd,
    TextButton,
} from './styles';
import { AnalysisData } from '../../components/AnalysisData';

const NewAnalysis = (props) => {
    const [data, setData] = useState([
        {
            key: 1,
            regularMarketPrice: 0,
            symbol: null,
            shortName: null,
            dy: 0,
            py: 0,
            totalEarnings1: 0,
            totalEarnings2: 0,
            totalEarnings3: 0,
            totalEarnings4: 0,
            totalEarnings5: 0,
            dividendValuation: 0,
            scoreFromRecomendationSystem: 0,
        },
    ]);
    const [counter, setCounter] = useState(1);

    const AddMore = () => {
        setData([...data, { key: counter + 1, value: 22 }]);
        setCounter(counter + 1);
    };

    const RemoveItem = (key) => {
        setData([...data.filter((x) => x.key != key)]);
    };

    const NavigationToAnalysisResultPage = (props) => {
        props.navigation.navigate('AnalysisResultPage', {
            dataToAnalysis: data,
        });
    };

    return (
        <>
            <KeyboardView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    {data.map((d) => (
                        <AnalysisData removeItem={RemoveItem} data={d} />
                    ))}
                    <ContainerForBtnAdd>
                        <ButtonAdd onPress={() => AddMore()}>
                            <TextButton> + Adicionar outro</TextButton>
                        </ButtonAdd>
                    </ContainerForBtnAdd>
                </ScrollView>
                <Container>
                    <ButtonSubmit
                        onPress={() => NavigationToAnalysisResultPage(props)}
                    >
                        <TextButton>Analisar</TextButton>
                    </ButtonSubmit>
                </Container>
            </KeyboardView>
        </>
    );
};

export default NewAnalysis;
