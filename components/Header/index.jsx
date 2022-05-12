import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/account_circle_black_24dp.png';

function Header() {
    return (
        <Container>
            <Image
                source={Logo}
            />
        </Container>
    )
}

export default Header;