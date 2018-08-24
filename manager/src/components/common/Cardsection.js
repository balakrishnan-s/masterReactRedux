import React from 'react';
import { View } from 'react-native';

const Cardsection = (probs) => {
  return (
    <View style={styles.containerStyle}>
      {probs.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      borderColor: '#ddd',
      position: 'relative'
  }
};

export { Cardsection };
