import React from 'react';
import { Image, Text } from 'react-native';
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
import AccountIcon from '../../assets/event_black_24dp.png';

const AnalysisResult = (props) => {
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
                                    width: '50%',
                                    height: '50%',
                                    flex: 1,
                                    resizeMode: 'contain',
                                }}
                                source={AccountIcon}
                            />
                        </BoxImage>
                        <BoxDate>
                            <TextDate style={{ fontSize: 15 }}>
                                10/03/2022
                            </TextDate>
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
                        <ContainerHeaderCol1 style={{ height: 'auto' }}>
                            <TextAfterHeader style={{ fontSize: 15 }}>
                                ITSA4
                            </TextAfterHeader>
                        </ContainerHeaderCol1>
                        <ContainerHeaderCol2 style={{ height: 'auto' }}>
                            <TextAfterHeader>8%</TextAfterHeader>
                            <TextAfterHeader>75%</TextAfterHeader>
                            <TextAfterHeader>R$10,80</TextAfterHeader>
                            <TextAfterHeader>4.7</TextAfterHeader>
                        </ContainerHeaderCol2>
                    </Row>
                </Container>
            </ContainerAround>
        </>
    );
};

export default AnalysisResult;
