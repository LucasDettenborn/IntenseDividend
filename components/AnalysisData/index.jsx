import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import {
    Container,
    Divider,
    Text,
    TextHeader,
    TextHeader2,
    Row,
    ContainerAround,
    Required,
    LottieViewAnimation,
    ContainerForBtnRemove,
    ButtonRemove,
} from './styles';
import MaterialInput from '../../components/Input/MaterialInput';
import api from '../../services/Api';
import loadAnimation from '../../assets/making-money.json';
import RemoveIcon from '../../assets/delete_black_24dp.png';

function AnalysisData({ removeItem, data }) {
    const [isLoading, setLoading] = useState(false);
    const [ticketRequired, setTicketRequired] = useState(null);
    const [searchTicketOk, setSearchTicketOk] = useState(null);
    const [textForSearch, setTextForSearch] = useState(null);
    const [regularMarketPrice, setRegularMarketPrice] = useState(0);
    const [symbol, setSymbol] = useState(null);
    const [shortName, setShortName] = useState(null);
    const [keyboardType, setKeyboardType] = useState('decimal-pad');

    useEffect(() => {
        CheckSearchTicketExists();
    }, [textForSearch]);

    useEffect(() => {
        if (symbol != null) {
            setLoading(false);
            setSearchTicketOk(symbol.toUpperCase());
            data.regularMarketPrice = regularMarketPrice;
            data.symbol = symbol.toUpperCase();
            data.shortName = shortName;
        }
    }, [symbol]);

    const CheckSearchTicketExists = async () => {
        try {
            if (
                searchTicketOk == null &&
                textForSearch != null &&
                textForSearch.trim().length == 5
            ) {
                let symbolToSearch = textForSearch.toUpperCase() + '.SA';
                //Requisição para o yahoo finance
                setLoading(true);
                await api
                    .get(
                        `quote?region=${'US'}&lang=${'en'}&symbols=${symbolToSearch}`
                    )
                    .then(function (response) {
                        if (response != null && response != undefined) {
                            setRegularMarketPrice(
                                response.data.quoteResponse.result[0]
                                    .regularMarketPrice
                            );
                            setSymbol(
                                response.data.quoteResponse.result[0].symbol
                            );
                            setShortName(
                                response.data.quoteResponse.result[0].shortName
                            );
                        } else {
                            console.error(error);
                            setTicketRequired(
                                () => 'Favor insira um TicketVálido'
                            );
                            setLoading(false);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                        setTicketRequired(() => 'Favor insira um TicketVálido');
                        setLoading(false);
                    });
            }
        } catch (error) {
            console.log('error => ', error);
        }
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
                {searchTicketOk && isLoading == false ? (
                    <Container>
                        <Text>{searchTicketOk}</Text>
                        <Divider></Divider>
                        <Text style={{ fontSize: 16 }}>Ativo envolvido:</Text>
                        <Row>
                            <TextHeader>Nome</TextHeader>
                            <TextHeader2>{searchTicketOk}</TextHeader2>
                        </Row>
                        <MaterialInput
                            titleField={'DY'}
                            returnText={(text) => (data.dy = text)}
                            placeholderText={'Digite em formato de porcentagem'}
                            keyboardType={keyboardType}
                            maxLength={4}
                        ></MaterialInput>
                        <MaterialInput
                            titleField={'Payout'}
                            returnText={(e) => (data.py = e)}
                            placeholderText={'Digite em formato de porcentagem'}
                            keyboardType={keyboardType}
                            maxLength={2}
                        ></MaterialInput>
                        <MaterialInput
                            titleField={'Total de proventos pago em 2017'}
                            returnText={(e) => (data.totalEarnings1 = e)}
                            placeholderText={
                                'Total pago no ano de JCP ou Dividendo'
                            }
                            keyboardType={keyboardType}
                            maxLength={6}
                        ></MaterialInput>
                        <MaterialInput
                            titleField={'Total de proventos pago em 2018'}
                            returnText={(e) => (data.totalEarnings2 = e)}
                            placeholderText={
                                'Total pago no ano de JCP ou Dividendo'
                            }
                            keyboardType={keyboardType}
                            maxLength={6}
                        ></MaterialInput>
                        <MaterialInput
                            titleField={'Total de proventos pago em 2019'}
                            returnText={(e) => (data.totalEarnings3 = e)}
                            placeholderText={
                                'Total pago no ano de JCP ou Dividendo'
                            }
                            keyboardType={keyboardType}
                            maxLength={6}
                        ></MaterialInput>
                        <MaterialInput
                            titleField={'Total de proventos pago em 2020'}
                            returnText={(e) => (data.totalEarnings4 = e)}
                            placeholderText={
                                'Total pago no ano de JCP ou Dividendo'
                            }
                            keyboardType={keyboardType}
                            maxLength={6}
                        ></MaterialInput>
                        <MaterialInput
                            titleField={'Total de proventos pago em 2021'}
                            returnText={(e) => (data.totalEarnings5 = e)}
                            placeholderText={
                                'Total pago no ano de JCP ou Dividendo'
                            }
                            keyboardType={keyboardType}
                            maxLength={6}
                        ></MaterialInput>
                        {data.key != 1 ? (
                            <ContainerForBtnRemove>
                                <ButtonRemove
                                    onPress={() => removeItem(data.key)}
                                >
                                    <Image
                                        style={{
                                            width: '50%',
                                            height: '100%',
                                            flex: 1,
                                            resizeMosde: 'contain',
                                        }}
                                        source={RemoveIcon}
                                    />
                                </ButtonRemove>
                            </ContainerForBtnRemove>
                        ) : (
                            <></>
                        )}
                    </Container>
                ) : isLoading == false ? (
                    <Container>
                        <MaterialInput
                            titleField={'Digite o ticket do ativo'}
                            returnText={setTextForSearch}
                        ></MaterialInput>
                        {!!ticketRequired && (
                            <Required>{ticketRequired}</Required>
                        )}
                        {data.key != 1 ? (
                            <ContainerForBtnRemove>
                                <ButtonRemove
                                    onPress={() => removeItem(data.key)}
                                >
                                    <Image
                                        style={{
                                            width: '50%',
                                            height: '100%',
                                            flex: 1,
                                            resizeMosde: 'contain',
                                        }}
                                        source={RemoveIcon}
                                    />
                                </ButtonRemove>
                            </ContainerForBtnRemove>
                        ) : (
                            <></>
                        )}
                    </Container>
                ) : (
                    <Container>
                        <LottieViewAnimation autoPlay source={loadAnimation} />
                    </Container>
                )}
            </ContainerAround>
        </>
    );
}

export { AnalysisData };
