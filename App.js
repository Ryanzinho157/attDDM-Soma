import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    
    
  });

  const [soma, setSoma] = useState(0);

  const handleInputChange = (inputName, value) => {
    setInputValues({ ...inputValues, [inputName]: value });
  };

  const handleSoma = () => {
    const { input1, input2, input3 } = inputValues;

    const result = parseInt(input1) + parseInt(input2) + parseInt(input3)

    setSoma(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Primeiro numero:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input1', value)}
        value={inputValues.input1}
        keyboardType='numeric'
      />

      <Text style={styles.label}>segundo numero:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input2', value)}
        value={inputValues.input2}
        keyboardType='numeric'
      />

        <Text style={styles.label}>terceiro numero:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input3', value)}
        value={inputValues.input3}
        keyboardType='numeric'
      />

      <Button title='Somar' onPress={handleSoma} />
      <Text>Resultado: {soma}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    padding: 20,
  }
});

export default App;


