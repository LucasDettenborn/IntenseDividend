import React, { useState } from 'react';
import { Image } from 'react-native';
import {
    Container,
    Row,
    Row2,
    BoxImage,
    TextDate,
    TextBeforeHeader,
    TextHeader,
    TextAfterHeader,
    BoxDate,
    Divider,
    ContainerAround,
    ContainerHeaderCol1,
    ContainerHeaderCol2,
} from './styles';
import CalendarIcon from '../../assets/event_black_24dp.png';
import Helper from '../../util/Helper';

function AnalysisResult({ dateReport, data }) {
    const [targetDividendFromUser, setTargetDividendFromUser] = useState(6);

    const MathDividendValuation = (te1, te2, te3, te4, te5) => {
        //Fazer a média dos proventos
        let average =
            (parseFloat(te1) +
                parseFloat(te2) +
                parseFloat(te3) +
                parseFloat(te4) +
                parseFloat(te5)) /
            5;
        //Deve-se dividir a média pelo alvo requirido no cadastro do usuário * 100
        data.dividendValuation = (
            (average / targetDividendFromUser) *
            100
        ).toFixed(2);
    };

    const MathScoreRecommendationSystem = (dy, py, dv) => {
        //Aplicar aqui o que está no Excel
        let dyWeight = parseFloat(Helper.dividendYieldConvertWeight(dy)) * 0.15;
        let pyWeight = parseInt(Helper.payOutConvertWeight(py)) * 0.05;
        let divValuationWeight =
            Helper.dividendValuationConvertWeight(dv) * 0.8;
        let result = dyWeight + pyWeight + divValuationWeight;
        data.scoreFromRecomendationSystem = result.toFixed(2);
    };

    return (
        <>
            <ContainerAround
                style={{
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                    shadowOffset: {
                        height: 1,
                        width: 1,
                    },
                }}
            >
                <Container>
                    <Row style={{ marginTop: 12 }}>
                        <BoxImage>
                            <Image
                                style={{
                                    width: '60%',
                                    height: '60%',
                                    flex: 1,
                                    resizeMode: 'contain',
                                }}
                                source={CalendarIcon}
                            />
                        </BoxImage>
                        <BoxDate>
                            <TextDate>{dateReport}</TextDate>
                        </BoxDate>
                    </Row>
                    <Divider></Divider>
                    <Row2 style={{ height: '15%' }}>
                        <TextBeforeHeader
                            style={{ paddingLeft: 5, fontSize: 15 }}
                        >
                            Ativos envolvidos:
                        </TextBeforeHeader>
                    </Row2>
                    <Row style={{ height: '12%' }}>
                        <ContainerHeaderCol1>
                            <TextHeader>Nome</TextHeader>
                        </ContainerHeaderCol1>
                        <ContainerHeaderCol2>
                            <TextHeader>DY</TextHeader>
                            <TextHeader>PY</TextHeader>
                            <TextHeader>P.Teto</TextHeader>
                            <TextHeader>Nota</TextHeader>
                        </ContainerHeaderCol2>
                    </Row>
                    <Row style={{ height: '35%' }}>
                        {data != null && data != 'undefined' && (
                            <>
                                <ContainerHeaderCol1 style={{ height: 'auto' }}>
                                    <TextAfterHeader style={{ fontSize: 15 }}>
                                        {data.symbol}
                                    </TextAfterHeader>
                                </ContainerHeaderCol1>
                                <ContainerHeaderCol2 style={{ height: 'auto' }}>
                                    <TextAfterHeader>
                                        {data.dy}%
                                    </TextAfterHeader>
                                    <TextAfterHeader>
                                        {data.py}%
                                    </TextAfterHeader>
                                    <TextAfterHeader>
                                        R$:
                                        {data.dividendValuation == 0
                                            ? MathDividendValuation(
                                                  data.totalEarnings1,
                                                  data.totalEarnings2,
                                                  data.totalEarnings3,
                                                  data.totalEarnings4,
                                                  data.totalEarnings5
                                              )
                                            : data.dividendValuation}
                                    </TextAfterHeader>
                                    <TextAfterHeader>
                                        {data.dividendValuation > 0 &&
                                        data.scoreFromRecomendationSystem == 0
                                            ? MathScoreRecommendationSystem(
                                                  data.dy,
                                                  data.py,
                                                  data.dividendValuation
                                              )
                                            : data.scoreFromRecomendationSystem}
                                    </TextAfterHeader>
                                </ContainerHeaderCol2>
                            </>
                        )}
                    </Row>
                </Container>
            </ContainerAround>
        </>
    );
}

export { AnalysisResult };
