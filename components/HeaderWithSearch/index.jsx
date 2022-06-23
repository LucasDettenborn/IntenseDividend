import React from 'react';
import { Image } from 'react-native';
import {
    Container,
    ContainerSearch,
    InputSearch,
    ButtonSearch,
    Row1,
    Row2,
    SubSearchCol1,
    SubSearchCol2,
    Text,
} from './styles';
import SearchIcon from '../../assets/search_black_24dp.png';
import ReportIcon from '../../assets/grid_view_black_24dp.png';

function HeaderWithSearch({ setdata }) {
    return (
        <Container
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
            <Row1>
                <ContainerSearch>
                    <InputSearch
                        placeholder="Pesquise pela data de relatório"
                        placeholderTextColor="#C4C4C4"
                        onChangeText={(e) => setdata(e)}
                    ></InputSearch>
                    <ButtonSearch>
                        <Image
                            style={{
                                width: '50%',
                                height: '50%',
                                flex: 1,
                                resizeMode: 'contain',
                            }}
                            source={SearchIcon}
                        />
                    </ButtonSearch>
                </ContainerSearch>
            </Row1>
            <Row2>
                <SubSearchCol1>
                    <Image
                        style={{
                            width: '38%',
                            height: '38%',
                            flex: 1,
                            resizeMode: 'contain',
                        }}
                        source={ReportIcon}
                    />
                </SubSearchCol1>
                <SubSearchCol2>
                    <Text>Relatórios</Text>
                </SubSearchCol2>
            </Row2>
        </Container>
    );
}

export default HeaderWithSearch;
