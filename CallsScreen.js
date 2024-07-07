import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CallsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={24} color="white" />
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('All')}>
            <Text style={[styles.tab, activeTab === 'All' && styles.activeTab]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Missed')}>
            <Text style={[styles.tab, activeTab === 'Missed' && styles.activeTab]}>Missed</Text>
          </TouchableOpacity>
        </View>
        <MaterialCommunityIcons name="phone-plus" size={24} color="white" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={20} color="white" />
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#777" />
        </View>
      </View>

      <View style={styles.mainContent}>
        {activeTab === 'All' ? (
          <>
            <Text style={styles.noCallsText}>No recent calls</Text>
            <Text style={styles.subText}>Get started by calling a friend</Text>
          </>
        ) : (
          <>
            <Text style={styles.noCallsText}>No missed calls</Text>
          </>
        )}
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.bottomBarItem}>
          <MaterialCommunityIcons name="message-text-outline" size={24} color="white" />
          <Text style={styles.bottomBarText}>Chats</Text>
        </TouchableOpacity>
        <View style={styles.bottomBarItem}>
          <MaterialCommunityIcons name="phone" size={24} color="white" />
          <Text style={styles.bottomBarText}>Calls</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Stories')} style={styles.bottomBarItem}>
          <Icon name="web_stories" size={24} color="white" />
          <Text style={styles.bottomBarText}>Stories</Text>
        </TouchableOpacity>
        <View style={styles.bottomBarItem}>
          <MaterialCommunityIcons name="cog" size={24} color="white" />
          <Text style={styles.bottomBarText}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    fontSize: 16,
    color: '#777',
    marginHorizontal: 10,
  },
  activeTab: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#484848',
    borderRadius: 8,
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10,
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCallsText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#777',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#555555',
    paddingTop: 10,
    paddingBottom: 20,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CallsScreen;
