/* 

import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Btn from './components/Button';
import Display from './components/Display';

export default function App() {
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

  const handleNumberPress = (num: string) => {
    setCurrentValue((prev) => (prev === '0' ? num : prev + num));
  };

  const handleOperatorPress = (op: string) => {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('0');
  };

  const handleEqualPress = () => {
    if (operator && previousValue) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      let result = 0;

      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
      }

      setCurrentValue(result.toString());
      setOperator(null);
      setPreviousValue(null);
    }
  };

  const handleClearPress = () => {
    setCurrentValue('0');
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <Display valor={currentValue} />
      <View style={styles.buttonRow}>
        <Btn label="1" onClick={() => handleNumberPress('1')} />
        <Btn label="2" onClick={() => handleNumberPress('2')} />
        <Btn label="3" onClick={() => handleNumberPress('3')} />
        <Btn label="+" onClick={() => handleOperatorPress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Btn label="4" onClick={() => handleNumberPress('4')} />
        <Btn label="5" onClick={() => handleNumberPress('5')} />
        <Btn label="6" onClick={() => handleNumberPress('6')} />
        <Btn label="-" onClick={() => handleOperatorPress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Btn label="7" onClick={() => handleNumberPress('7')} />
        <Btn label="8" onClick={() => handleNumberPress('8')} />
        <Btn label="9" onClick={() => handleNumberPress('9')} />
        <Btn label="*" onClick={() => handleOperatorPress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Btn label="C" onClick={handleClearPress} />
        <Btn label="0" onClick={() => handleNumberPress('0')} />
        <Btn label="=" onClick={handleEqualPress} />
        <Btn label="/" onClick={() => handleOperatorPress('/')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});
 */

import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Btn from './components/Button';
import Display from './components/Display';

export default function App() {
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [calculation, setCalculation] = useState<string>('');

  const handleNumberPress = (num: string) => {
    setCurrentValue((prev) => (prev === '0' ? num : prev + num));
    setCalculation((prev) => (prev === '' ? num : prev + num));
  };

  const handleOperatorPress = (op: string) => {
    if (operator) {
      handleEqualPress();
    }
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('0');
    setCalculation((prev) => prev + ' ' + op + ' ');
  };

  const handleEqualPress = () => {
    if (operator && previousValue) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      let result = 0;

      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
      }

      setCurrentValue(result.toString());
      setOperator(null);
      setPreviousValue(null);
      setCalculation((prev) => prev + ' = ' + result.toString());
    }
  };

  const handleClearPress = () => {
    setCurrentValue('0');
    setOperator(null);
    setPreviousValue(null);
    setCalculation('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <Display valor={calculation} />
      <Display valor={currentValue} />
      <View style={styles.buttonRow}>
        <Btn label="1" onClick={() => handleNumberPress('1')} />
        <Btn label="2" onClick={() => handleNumberPress('2')} />
        <Btn label="3" onClick={() => handleNumberPress('3')} />
        <Btn label="+" onClick={() => handleOperatorPress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Btn label="4" onClick={() => handleNumberPress('4')} />
        <Btn label="5" onClick={() => handleNumberPress('5')} />
        <Btn label="6" onClick={() => handleNumberPress('6')} />
        <Btn label="-" onClick={() => handleOperatorPress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Btn label="7" onClick={() => handleNumberPress('7')} />
        <Btn label="8" onClick={() => handleNumberPress('8')} />
        <Btn label="9" onClick={() => handleNumberPress('9')} />
        <Btn label="*" onClick={() => handleOperatorPress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Btn label="C" onClick={handleClearPress} />
        <Btn label="0" onClick={() => handleNumberPress('0')} />
        <Btn label="=" onClick={handleEqualPress} />
        <Btn label="/" onClick={() => handleOperatorPress('/')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});
