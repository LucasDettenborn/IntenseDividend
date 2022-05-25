import React from 'react';
import { Image } from 'react-native';
import { Container, Row, BoxImage, TextDate, BoxDate, Divider, ContainerAround } from './styles';
import AccountIcon from '../../assets/event_black_24dp.png';


const AnalysisResult = props => {
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
            <Container>
                <Row>
                    <BoxImage>
                        <Image 
                            style={{backgroundColor: 'green', width: '50%', height: '50%' , flex: 1, resizeMode: 'contain'}}
                            source={AccountIcon}
                        />
                    </BoxImage>
                    <BoxDate>
                        <TextDate style={{ fontSize: 15 }}>10/03/2022</TextDate>
                    </BoxDate>
                </Row>
                <Divider></Divider>
            </Container>
        </ContainerAround>
        </>


    )
}

export default AnalysisResult;