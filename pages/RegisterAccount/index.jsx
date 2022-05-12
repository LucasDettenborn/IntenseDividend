import React from 'react';
import { KeyboardView, Container, Input, ButtonSubmit, TextButton, InputBottonLine, Action, ActionText } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';

const NavigationToSignin = props => {
    props.navigation.navigate('SignIn');
}

const RegisterAccount = props => {
    return (
        <KeyboardView>
            <LinearGradient
                style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                colors={['#8BA889', '#465445']}
            >
                <Header />
                <Container>
                    <Input
                        placeholder="Nome do usuário"
                        placeholderTextColor="#E4E6D9"
                    />
                    <InputBottonLine></InputBottonLine>
                    <Input
                        placeholder="E-mail"
                        placeholderTextColor="#E4E6D9"
                    />
                    <InputBottonLine></InputBottonLine>
                    <Input
                        placeholder="Senha"
                        placeholderTextColor="#E4E6D9"
                    />
                    <InputBottonLine></InputBottonLine>
                    <Input
                        placeholder="Insira a meta anual em proventos (5%)"
                        placeholderTextColor="#E4E6D9"
                    />
                    <InputBottonLine></InputBottonLine>
                    <ButtonSubmit>
                        <TextButton>Registrar</TextButton>
                    </ButtonSubmit>
                    <Action
                        onPress={() => NavigationToSignin(props)}
                    >
                        <ActionText>Já possuí uma conta registrada? ir para Login </ActionText>
                    </Action>
                </Container>

            </LinearGradient>
        </KeyboardView>
    )
}

export default RegisterAccount;