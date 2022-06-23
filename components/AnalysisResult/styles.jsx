import styled from 'styled-components/native';

export const ContainerAround = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 30px;
`;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    width: 92%;
    height: 100%;
    border-radius: 10px;
    background-color: #ffffff;
`;

export const ContainerHeaderCol1 = styled.View`
    flex: 0.5;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const ContainerHeaderCol2 = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Divider = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 90%;
    height: 2px;
    background-color: #253528;
`;

export const Row = styled.View`
    flex: 1;
    margin-top: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    height: 20%;
`;

export const Row2 = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    height: 25%;
`;

export const BoxImage = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
`;

export const BoxDate = styled.View`
    height: 100%;
    width: 80%;
    align-items: flex-start;
    justify-content: center;
`;

export const TextDate = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #253528;
`;

export const TextBeforeHeader = styled.Text`
    padding-top: 5px;
    font-size: 17px;
    width: 100%;
    height: 100%;
    font-weight: 600;
    color: #253528;
`;

export const TextHeader = styled.Text`
    padding-top: 5px;
    font-size: 15px;
    height: 100%;
    font-weight: 700;
    color: #c0cfb2;
`;

export const TextAfterHeader = styled.Text`
    padding-top: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #253528;
`;
