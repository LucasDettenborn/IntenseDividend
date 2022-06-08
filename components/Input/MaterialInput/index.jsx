import React from 'react';
import { TextInput } from 'react-native-paper';
import { InputBottonLine } from './styles';

const MaterialInput = ({
    titleField,
    returnText,
    placeholderText,
    keyboardType,
    maxLength,
}) => {
    return (
        <>
            <TextInput
                style={{
                    width: '90%',
                    backgroundColor: 'transparent',
                    fontSize: 18,
                    fontWeight: '700',
                }}
                theme={{
                    colors: {
                        placeholder: '#C4C4C4',
                        text: '#C4C4C4',
                        primary: '#C0CFB2',
                        underlineColor: 'transparent',
                        activeUnderlineColor: 'transparent',
                        selectionColor: 'transparent',
                    },
                }}
                label={titleField ? titleField : 'noTitle'}
                placeholder={placeholderText ? placeholderText : ''}
                onChangeText={(text) => returnText(text)}
                keyboardType={keyboardType ? keyboardType : 'default'}
                maxLength={maxLength ? maxLength : 10}
            />
            <InputBottonLine></InputBottonLine>
        </>
    );
};

export default MaterialInput;
