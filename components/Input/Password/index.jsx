import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const Password = ({ setPassword }) => {

    const [passwordVisible, setPasswordVisible] = useState(true);

    return (
        <TextInput
            style={{
                width: '90%',
                backgroundColor: "transparent",
                fontSize: 20
            }}
            theme={{
                colors: {
                    placeholder: '#E4E6D9', text: '#E4E6D9', primary: '#E4E6D9',
                    underlineColor: 'transparent',
                    activeUnderlineColor: 'transparent',
                    selectionColor: 'transparent'
                }
            }}
            label="Password"
            secureTextEntry={passwordVisible}
            right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
            onChangeText={(text) => setPassword(text)}
        />
    );
};

export default Password;