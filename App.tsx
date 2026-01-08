import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Age"
        keyboardType='decimal-pad'
      />
      <Text style={styles.text}>
        Lower limit: {
          isNaN(parseInt(age))
            ? 0
            : (220 - parseInt(age)) * 0.65
        } bpm
      </Text>
      <Text style={styles.text}>
        Upper limit: {
          isNaN(parseInt(age))
            ? 0
            : (220 - parseInt(age)) * 0.85
        } bpm
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 125,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  }
});
