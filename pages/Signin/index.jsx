import React, { useState, useEffect } from 'react';
import { KeyboardView, Container, Input, Required, ButtonSubmit, TextButton, InputBottonLine, Action, ActionText } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import Password from '../../components/Input/Password';
import Users from '../../services/Users';

const NavigationToRegisterAccount = props => {
    props.navigation.navigate('RegisterAccount');
}

const NavigationToHome = props => {
    props.navigation.navigate('Home');
}

const Signin = props => {

    const [email, setEmail] = useState(null);
    const [emailRequired, setEmailRequired] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRequired, setPasswordRequired] = useState(null);

    /*useEffect(() => {
        CheckRequiredField();
    }, [!!email, !!password]);*/

    const SigninHandler = props => {
        //Aplica o método para verificar os campos
        CheckRequiredField();
        if ((emailRequired == null && email != null)
            && (passwordRequired == null && password != null)) {
            Users.findUserByLoginAndPassword({ email, password })
                .then(() => NavigationToHome(props))
                .catch(() => alert("Usuário não encontrado!"));
        }
    }

    const CheckRequiredField = () => {
        if (email == null || email.trim() === "") {
            setEmailRequired(() => ("Email required."));
        } else {
            setEmailRequired(() => (null));
        }
        if (password == null || password.trim() === "") {
            setPasswordRequired(() => ("Password required."));
        } else {
            setPasswordRequired(() => (null));
        }
    }

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
                        placeholder="E-mail"
                        placeholderTextColor="#E4E6D9"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <InputBottonLine></InputBottonLine>
                    {!!emailRequired && (
                        <Required>{emailRequired}</Required>
                    )}
                    <Password setPassword={setPassword} />
                    <InputBottonLine style={{ marginTop: -2 }}></InputBottonLine>
                    {!!passwordRequired && (
                        <Required>{passwordRequired}</Required>
                    )}
                    <Action
                        style={{
                            alignItems: 'flex-end',
                        }}
                    >
                        <ActionText>Esqueci minha senha</ActionText>
                    </Action>
                    <ButtonSubmit onPress={() => SigninHandler(props)}>
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