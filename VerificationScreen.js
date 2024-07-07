import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const inputs = useRef([]);

  const handleNext = () => {
    if (code.join('').length === 6) {
      setIsValidating(true);
      // Simulate validation
      setTimeout(() => {
        setIsValidating(false);
        navigation.navigate('UserInfo');
      }, 3000);
    } else {
      setError('Invalid code. Please enter the 6-digit code sent to your number.');
    }
  };

  const handleChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      let newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
      setError('');
      // Automatically focus next input
      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>Enter the code sent to your number</Text>
      
      <View style={styles.codeInputContainer}>
        {code.map((num, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={num}
            onChangeText={(text) => handleChange(text, index)}
            ref={(input) => { inputs.current[index] = input }}
          />
        ))}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>{isValidating ? 'Validating...' : 'Next'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002147',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#FFFFFF'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#FFFFFF'
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    width: '12%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF'
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default VerificationScreen;
