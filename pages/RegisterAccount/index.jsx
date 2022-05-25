import React, { useState } from 'react';
import { KeyboardView, Container, Input, ButtonSubmit, TextButton, InputBottonLine, Action, ActionText } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import Password from '../../components/Input/Password';
import Users from '../../services/Users';

const NavigationToSignin = props => {
    props.navigation.navigate('SignIn');
}

const RegisterNewUserHandler = (props) => {
    console.log("Username " + props.userName);
    console.log("Email " + props.email);
    console.log("Senha " + props.passwordUser);
    console.log("Dividend Goal " + props.dividendGoal);
    Users.create(props)
        .then(id => console.log('Novo usuário registrado com sucesso => ' + id))
        .catch(err => console.log(err));
}

const RegisterAccount = props => {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [passwordUser, setpasswordUser] = useState(null);
    const [dividendGoal, setDividendGoal] = useState(null);

    return (
        <KeyboardView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
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
                        value={userName}
                        onChangeText={(e) => setUserName(e)}
                    />
                    <InputBottonLine></InputBottonLine>
                    <Input
                        placeholder="E-mail"
                        placeholderTextColor="#E4E6D9"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <InputBottonLine></InputBottonLine>
                    <Password setPassword={setpasswordUser} />
                    <InputBottonLine style={{ marginTop: -2 }}></InputBottonLine>
                    <Input
                        placeholder="Insira a meta anual em proventos (5%)"
                        placeholderTextColor="#E4E6D9"
                        value={dividendGoal}
                        onChangeText={(e) => setDividendGoal(e)}
                    />
                    <InputBottonLine></InputBottonLine>
                    <ButtonSubmit onPress={() => RegisterNewUserHandler({ userName, email, passwordUser, dividendGoal })}>
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