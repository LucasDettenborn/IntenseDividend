import React, { useState, useEffect } from 'react';
import { Container, Divider, Text, TextHeader, TextHeader2, Row, ContainerAround, Required } from './styles';
import MaterialInput from '../../components/Input/MaterialInput';
//import GoogleFinance from 'google-finance-data';

const AnalysisData = props => {

    const [ticketRequired, setTicketRequired] = useState(null);
    const [searchTicketOk, setSearchTicketOk] = useState(null);
    const [searchTicketData, setSearchTicketData] = useState(null);
    const [textForSearch, setTextForSearch] = useState(null);

    useEffect(() => {
        CheckSearchTicketExists();
    }, [textForSearch]);

    const CheckSearchTicketExists = () => {
        /*console.log("\n\n");
        console.log("searchTicketOk", searchTicketOk);
        console.log("textForSearch", textForSearch);
        console.log("textForSearch.trim().length", textForSearch ? textForSearch.length : "-1");*/
        if (searchTicketOk == null && textForSearch != null && textForSearch.trim().length == 5) {
            const googleFinance = require('../..');
            //Requisição para o google finance

            //googleFinance.getSymbol("msft")
            //.then(data => console.log(JSON.stringify(data, null, 2)))
            //.catch(err => console.error(err.stack ? err.stack : err));

            /*var SYMBOL = 'NASDAQ:AAPL';
            var FROM = '2014-01-01';
            var TO = '2014-12-31';

            googleFinance.historical({
                symbol: SYMBOL,
                from: FROM,
                to: TO
            }, function (err, quotes) {
                if (err) { throw err; }
                console.log(util.format(
                    '=== %s (%d) ===',
                    SYMBOL,
                    quotes.length
                ).cyan);
                if (quotes[0]) {
                    console.log(
                        '%s\n...\n%s',
                        JSON.stringify(quotes[0], null, 2),
                        JSON.stringify(quotes[quotes.length - 1], null, 2)
                    );
                } else {
                    console.log('N/A');
                }
            });*/

            //then
            setSearchTicketOk(textForSearch.toUpperCase());
            //catch
            //errorMessage
            //setTicketRequired(() => ("Favor insira um TicketVálido"));
        }
    }


    return (
        <>
            <ContainerAround
                style={{
                    shadowColor: "#000000",
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                    shadowOffset: {
                        height: 1,
                        width: 1
                    }

                }}
            >
                {searchTicketOk ?
                    <Container>
                        <Text>{searchTicketOk}</Text>
                        <Divider></Divider>
                        <Text style={{ fontSize: 16 }}>Ativos envolvidos:</Text>
                        <Row>
                            <TextHeader>Nome</TextHeader>
                            <TextHeader2>{searchTicketOk}</TextHeader2>
                        </Row>
                        <MaterialInput titleField={"DY"} returnText={setTextForSearch} placeholderText={"Digite em formato de porcentagem"}></MaterialInput>
                        <MaterialInput titleField={"Payout"} returnText={setTextForSearch} placeholderText={"Digite em formato de porcentagem"}></MaterialInput>
                        <MaterialInput titleField={"Total de proventos pago em 2017"} returnText={setTextForSearch} placeholderText={"Total pago no ano de JCP ou Dividendo"}></MaterialInput>
                        <MaterialInput titleField={"Total de proventos pago em 2018"} returnText={setTextForSearch} placeholderText={"Total pago no ano de JCP ou Dividendo"}></MaterialInput>
                        <MaterialInput titleField={"Total de proventos pago em 2019"} returnText={setTextForSearch} placeholderText={"Total pago no ano de JCP ou Dividendo"}></MaterialInput>
                        <MaterialInput titleField={"Total de proventos pago em 2020"} returnText={setTextForSearch} placeholderText={"Total pago no ano de JCP ou Dividendo"}></MaterialInput>
                        <MaterialInput titleField={"Total de proventos pago em 2021"} returnText={setTextForSearch} placeholderText={"Total pago no ano de JCP ou Dividendo"}></MaterialInput>
                    </Container>

                    :

                    <Container>
                        <MaterialInput titleField={"Digite o ticket do ativo"} returnText={setTextForSearch}></MaterialInput>
                        {!!ticketRequired && (
                            <Required>{ticketRequired}</Required>
                        )}
                    </Container>
                }
            </ContainerAround>
        </>


    )
}

export default AnalysisData;