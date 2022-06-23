import React, { useState } from 'react';
import {
    KeyboardView,
    Container,
    Input,
    Required,
    ButtonSubmit,
    TextButton,
    InputBottonLine,
    Action,
    ActionText,
} from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import Password from '../../components/Input/Password';
import Users from '../../services/Users';
import UserContext from '../../util/UserContext';

const NavigationToRegisterAccount = (props) => {
    props.navigation.navigate('RegisterAccount');
};

const NavigationToHome = (props) => {
    props.navigation.navigate('Home');
};

const Signin = (props) => {
    const [email, setEmail] = useState(null);
    const [emailRequired, setEmailRequired] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRequired, setPasswordRequired] = useState(null);

    const SigninHandler = (props) => {
        //Aplica o método para verificar os campos
        CheckRequiredField();
        if (
            emailRequired == null &&
            email != null &&
            passwordRequired == null &&
            password != null
        ) {
            //É necessário aumentar o then para quando logar setar a meta em dividend do usuário
            Users.findUserByLoginAndPassword({ email, password })
                .then(function (o) {
                    console.log('\no.dividendGoal => ', o.dividendGoal);
                    //UserContext.setDividendUserGoal(o.dividendGoal);
                    NavigationToHome(props);
                })
                .catch(() => alert('Usuário não encontrado!'));
        }
    };

    const CheckRequiredField = () => {
        if (email == null || email.trim() === '') {
            setEmailRequired(() => 'Email required.');
        } else {
            setEmailRequired(() => null);
        }
        if (password == null || password.trim() === '') {
            setPasswordRequired(() => 'Password required.');
        } else {
            setPasswordRequired(() => null);
        }
    };

    return (
        <KeyboardView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
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
                    {!!emailRequired && <Required>{emailRequired}</Required>}
                    <Password setPassword={setPassword} />
                    <InputBottonLine
                        style={{ marginTop: -2 }}
                    ></InputBottonLine>
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
                    <Action onPress={() => NavigationToRegisterAccount(props)}>
                        <ActionText>Não possui uma conta? Criar uma</ActionText>
                    </Action>
                </Container>
            </LinearGradient>
        </KeyboardView>
    );
};

export default Signin;
