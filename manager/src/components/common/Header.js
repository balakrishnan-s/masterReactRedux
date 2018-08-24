import React from 'react';
import { Text, View } from 'react-native';


//Component
const Header = (probs) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{probs.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#fdd835',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  }
};

//make the Component availble to other part of the app
export {  Header };
