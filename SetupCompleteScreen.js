import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SetupCompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
            <Image source={require('./assets/logo3.png')} style={styles.image} />
      <Text style={styles.successText}>You are done setting up your Wave account</Text>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Text style={styles.buttonText}>Tap to Continue</Text>
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
    padding:20,
  },

  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },

  successText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',   
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default SetupCompleteScreen;
