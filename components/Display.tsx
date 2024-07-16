/* import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DisplayProps {
  valor: string;
}

const Display: React.FC<DisplayProps> = (props) => {
  return (
    <View style={styles.dsp}>
      <Text style={styles.txt}>
        {props.valor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dsp: {
    padding: 20,
    backgroundColor: '#000'
  }, 
  txt: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Display;
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DisplayProps {
  valor: string;
}

const Display: React.FC<DisplayProps> = (props) => {
  return (
    <View style={styles.dsp}>
      <Text style={styles.txt}>
        {props.valor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dsp: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    marginBottom: 20,
  },
  txt: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Display;
