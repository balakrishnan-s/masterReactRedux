import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>

      <TextInput
        autocorrect={false}
        style={inputStyle}
        value={value}
        secureTextEntry={secureTextEntry === 'true'}
        onChangeText={onChangeText}

        />
    </View>
  );
};


const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 35,
    borderRadius: 5,
    borderColor: '#4286f4',
    width: 400,
    flex: 3
  },
  labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
};

export { Input };
