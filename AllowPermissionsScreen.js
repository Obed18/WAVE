import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const AllowPermissionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allow Permissions</Text>
      <Text style={styles.subtitle}>
        Allowing notifications and contacts lets you see when messages arrive and helps you find people you know. Contacts are encrypted so the signal service can’t see them.
      </Text>
      <View style={styles.permissionContainer}>
        <View style={styles.permissionBox}>
         <Image source={require('./assets/logo.png')} style={styles.logoBox1} />
          <View>
            <Text style={styles.permissionText}>Wave</Text>
            <Text style={styles.permissionSubText}>Hey there!😂🎉🥳</Text>
          </View>
        </View>
        <View style={styles.permissionBox}>
          <View style={styles.logoBox}></View>
          <View>
            <View style={styles.smallBox}></View>
            <View style={styles.largeBox}></View>
          </View>
        </View>
        <View style={styles.permissionBox}>
          <View style={styles.logoBox}></View>
          <View>
            <View style={styles.smallBox}></View>
            <View style={styles.largeBox}></View>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => navigation.navigate('Policy')}
      >
        <Text style={styles.buttonText}>Allow Permissions</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#777474',
    textAlign: 'center',
    marginBottom: 30,
  },
  permissionContainer: {
    width: '100%',
    marginBottom: 30,
  },
  permissionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  logoBox: {
    width: 40,
    height: 40,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
    borderRadius: 10,
  },

    logoBox1: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    borderRadius: 10,
  },

  permissionText: {
    fontSize: 18,
    color: '#000000',
  },
  permissionSubText: {
    fontSize: 14,
    color: '#777474',
  },
  smallBox: {
    width: 60,
    height: 10,
    backgroundColor: '#E0E0E0',
    marginBottom: 5,
    borderRadius: 10,
  },
  largeBox: {
    width: 120,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  continueButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default AllowPermissionsScreen;
