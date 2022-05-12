import React from 'react';
import { KeyboardView, Container, Input, ButtonSubmit, TextButton, InputBottonLine, Action, ActionText } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';

const NavigationToRegisterAccount = props => {
    props.navigation.navigate('RegisterAccount'); 
}

const Signin = props => {
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
                        placeholder="E-mail"
                        placeholderTextColor="#E4E6D9"
                    />
                    <InputBottonLine></InputBottonLine>
                    <Input
                        placeholder="Senha"
                        placeholderTextColor="#E4E6D9"
                    />
                    <InputBottonLine></InputBottonLine>
                    <Action
                        style={{
                            alignItems: 'flex-end',
                        }}
                    >
                        <ActionText>Esqueci minha senha</ActionText>
                    </Action>
                    <ButtonSubmit>
                        <TextButton>Entrar</TextButton>
                    </ButtonSubmit>
                    <Action
                        onPress={() => NavigationToRegisterAccount(props)}
                    >
                        <ActionText>Não possui uma conta? Criar uma</ActionText>
                    </Action>
                </Container>

            </LinearGradient>
        </KeyboardView>
    )
}

export default Signin;