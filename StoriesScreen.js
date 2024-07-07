import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StoriesScreen = ({ navigation }) => {
  const [showStoryOverlay, setShowStoryOverlay] = useState(false);

  const handleStoryClick = () => {
    setShowStoryOverlay(true);
  };

  const closeStoryOverlay = () => {
    setShowStoryOverlay(false);
  };

  const proceedToStory = () => {
    setShowStoryOverlay(false);
    // Logic to display the story images
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={24} color="white" />
        <Text style={styles.headerTitle}>Stories</Text>
        <MaterialCommunityIcons name="camera" size={24} color="white" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={20} color="white" />
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#777" />
        </View>
      </View>

      <View style={styles.mainContent}>
        <TouchableOpacity style={styles.addStoryContainer}>
          <MaterialCommunityIcons name="account-circle" size={50} color="white" />
          <View style={styles.addStoryBadge}>
            <Text style={styles.addStoryText}>+</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.storiesContainer}>
          <TouchableOpacity style={styles.story} onPress={handleStoryClick}>
            <Image source={require('./assets/logo.png')} style={styles.storyImage} />
          </TouchableOpacity>
          {/* Add more stories here */}
        </View>
      </View>

      {showStoryOverlay && (
        <View style={styles.storyOverlay}>
          <TouchableOpacity style={styles.closeButton} onPress={closeStoryOverlay}>
            <MaterialCommunityIcons name="close" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.overlayContent}>
            <Text style={styles.overlayText}>Tap to advance</Text>
            <Text style={styles.overlayText}>Swipe up to skip</Text>
            <Text style={styles.overlayText}>Swipe right to exit</Text>
            <TouchableOpacity style={styles.gotItButton} onPress={proceedToStory}>
              <Text style={styles.gotItButtonText}>Got it</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.bottomBarItem}>
          <MaterialCommunityIcons name="message-text-outline" size={24} color="white" />
          <Text style={styles.bottomBarText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calls')} style={styles.bottomBarItem}>
          <MaterialCommunityIcons name="phone" size={24} color="white" />
          <Text style={styles.bottomBarText}>Calls</Text>
        </TouchableOpacity>
        <View style={styles.bottomBarItem}>
          <Icon name="web_stories" size={24} color="white" />
          <Text style={styles.bottomBarText}>Stories</Text>
        </View>
        <TouchableOpacity style={styles.bottomBarItem}>
          <MaterialCommunityIcons name="cog" size={24} color="white" />
          <Text style={styles.bottomBarText}>Settings</Text>
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 18,
    color: '#FFFFFF',
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
  },
  addStoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addStoryBadge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#03B620',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addStoryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  storiesContainer: {
    flexDirection: 'row',
  },
  story: {
    marginRight: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storyOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  overlayContent: {
    alignItems: 'center',
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 10,
  },
  gotItButton: {
    backgroundColor: '#03B620',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  gotItButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
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

export default StoriesScreen;
