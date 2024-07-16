/* 
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
      underlayColor="#005"
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
    padding: 20,
    margin: 5,
    backgroundColor: '#00f',
    borderRadius: 5,
  },
  txt: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width / 6,
  },
});

export default Btn;
 */

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
      underlayColor="#005"
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
    padding: 20,
    margin: 5,
    backgroundColor: '#00f',
    borderRadius: 5,
  },
  txt: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width / 6,
  },
});

export default Btn;
