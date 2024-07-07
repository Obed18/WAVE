// PolicyScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PolicyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/privacy.png')} style={styles.image} />
        <Text style={styles.mainText}>
          Take privacy with you. Be yourself in every message.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.policyText}>Terms & Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('PhoneNumber')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002147',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  mainText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 27,
    marginBottom: 10,
  },
  policyText: {
    color: '#8A2BE2',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
  },
  buttonContainer: {
    padding: 20,
  },
  continueButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default PolicyScreen;
