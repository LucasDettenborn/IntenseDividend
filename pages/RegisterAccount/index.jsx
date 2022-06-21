import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
    KeyboardView,
    Container,
    Input,
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

const NavigationToSignin = (props) => {
    props.navigation.navigate('SignIn');
};

const RegisterNewUserHandler = (props) => {
    Users.create(props)
        .then(function (id) {
            Alert.alert(
                'Novo usuário',
                'Registro salvo com sucesso, deseja ir para a tela de login',
                [
                    { text: 'Cancel' },
                    {
                        text: 'Sim',
                        onPress: () => NavigationToSignin(props.props),
                    },
                ]
            );
        })
        .catch((err) => console.log(err));
};

const RegisterAccount = (props) => {
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [passwordUser, setpasswordUser] = useState(null);
    const [dividendGoal, setDividendGoal] = useState(null);

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
                    <InputBottonLine
                        style={{ marginTop: -2 }}
                    ></InputBottonLine>
                    <Input
                        placeholder="Insira a meta anual em proventos (5%)"
                        placeholderTextColor="#E4E6D9"
                        value={dividendGoal}
                        onChangeText={(e) => setDividendGoal(e)}
                    />
                    <InputBottonLine></InputBottonLine>
                    <ButtonSubmit
                        onPress={() =>
                            RegisterNewUserHandler({
                                userName,
                                email,
                                passwordUser,
                                dividendGoal,
                                props,
                            })
                        }
                    >
                        <TextButton>Registrar</TextButton>
                    </ButtonSubmit>
                    <Action onPress={() => NavigationToSignin(props)}>
                        <ActionText>
                            Já possuí uma conta registrada? ir para Login{' '}
                        </ActionText>
                    </Action>
                </Container>
            </LinearGradient>
        </KeyboardView>
    );
};

export default RegisterAccount;
