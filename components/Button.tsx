import React from 'react';
import { Text, StyleSheet, TouchableHighlight, Dimensions, GestureResponderEvent, ViewStyle } from 'react-native';

interface BtnProps {
  label: string;
  onClick: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
}

const Btn: React.FC<BtnProps> = (props) => {
  return (
    <TouchableHighlight 
      style={[styles.container, props.style]} 
      onPress={props.onClick}
      underlayColor="grey"
    >
      <Text style={styles.txt}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#000',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    
  },
  txt: {
    fontSize: 24,
    color: '#EC539F',
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width / 6,
  },
});

export default Btn;
