/* import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './Display';
import Button from './Button';

const buttons = [
  ['AC', '(', ')', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '<=', '='],
];

const Calculadora = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const handlePress = (label: string) => {
    if (label === 'AC') {
      setExpression('');
      setResult('0');
      return;
    }

    if (label === '<=') {
      setExpression(expression.slice(0, -1));
      return;
    }

    if (label === '=') {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult('Error');
      }
      return;
    }

    setExpression(expression + label);
  };

  return (
    <View style={styles.container}>
      <Display expression={expression} result={result} />
      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((buttonLabel) => (
              <Button
                key={buttonLabel}
                label={buttonLabel}
                onClick={() => handlePress(buttonLabel)}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flex: 2,
    backgroundColor: '#888',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Calculadora; */