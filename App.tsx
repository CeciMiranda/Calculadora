import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn from './components/Button';
import Display from './components/Display';

export default function App() {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('0');

  const handlePress = (input: string) => {
    if (input === 'AC') {
      setExpression('');
      setResult('0');
    } else if (input === '=') {
      try {
        setResult(eval(expression).toString());
      } catch (e) {
        setResult('Error');
      }
    } else {
      setExpression((prev) => prev + input);
    }
  };

  return (
    <View style={styles.container}>
      <Display valor={expression}/>
      <Display valor={result}/>
      <View  style={styles.buttonRow} >
        {['AC', '(', ')', '/'].map((label) => (
          <Btn key={label} label={label} onClick={() => handlePress(label)} />
        ))}
      </View>
      <View style={styles.buttonRow} >
        {['7', '8', '9', '*'].map((label) => (
          <Btn key={label} label={label} onClick={() => handlePress(label)} />
        ))}
      </View>
      <View  style={styles.buttonRow} >
        {['4', '5', '6', '-'].map((label) => (
          <Btn key={label} label={label} onClick={() => handlePress(label)} />
        ))}
      </View>
      <View  style={styles.buttonRow} >
        {['1', '2', '3', '+'].map((label) => (
          <Btn key={label} label={label} onClick={() => handlePress(label)} />
        ))}
      </View>
      <View  style={styles.buttonRow} >
        {['0', '.', '<=', '='].map((label) => (
          <Btn key={label} label={label} onClick={() => handlePress(label)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderStyle: 'solid',
    
  
  },
});
