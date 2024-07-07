import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons,Octicons , Feather, Ionicons,SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const messages = [
  {
    id: '1',
    name: 'Wave',
    message: 'Welcome to the app!',
    time: 'Just now',
    unread: 3,
    image: require('./assets/logo.png'),
    verified: true,
  },
  // other messages...
];

const HomePageScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Message')}>
      <View style={styles.message}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Image source={item.image} style={styles.logo} />
          </View>
        </View>
        <View style={styles.messageContent}>
          <Text style={styles.sender}>
            {item.name}
            {item.verified && (
              <MaterialIcons
                name="verified"
                size={16}
                color="#03B620"
                style={styles.verifiedBadge}
              />
            )}
          </Text>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
        <View style={styles.messageDetails}>
          <Text style={styles.time}>{item.time}</Text>
          <View style={styles.unreadCount}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
            <Image source={require('./assets/P2.jpg')} style={styles.logo1} />
        </View>
        <Text style={[styles.headerItem, styles.activeHeader]}>Chats</Text>
          <SimpleLineIcons name="camera" size={24} color="white" />
          <Ionicons name="create-outline" size={24} color="white" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={20} color="white" />
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatsContainer}
      />

      <View style={styles.bottomBar}>
        <View style={styles.bottomBarItem}>
          <Ionicons name="chatbubble" size={24} color="white" />
                    <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>9+</Text>
          </View>
          <Text style={styles.bottomBarText}>Chats</Text>
        </View>
        <View style={styles.bottomBarItem}>
          <MaterialCommunityIcons name="phone" size={24} color="white" />
          <Text style={styles.bottomBarText}>Calls</Text>
        </View>
        <View style={styles.bottomBarItem}>
          <MaterialIcons name="web-stories"  size={24} color="white"/>
          <Text style={styles.bottomBarText}>Stories</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2F2F2F' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3F3F3F',
    padding:10,
    paddingHorizontal:20,
  },
  headerItem: { color: 'white', fontSize: 18, },
  activeHeader: { fontWeight: 'bold' },
  searchContainer: { padding: 10, backgroundColor: '#3F3F3F' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#484848',
    borderRadius: 20,
    padding: 10,
  },
  searchText: { color: 'white', marginLeft: 10 },
  chatsContainer: { flex: 1 },
  message: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#555555' },
  logoContainer: { marginRight: 10 },
  logo1: { width: 40, height: 40, borderRadius: 100, },
  logo: { width: 40, height: 40, },
  logoBackground: { backgroundColor: '#FFFFFF', borderRadius: 100, padding: 5 },
  messageContent: { flex: 1 },
  sender: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  messageText: { color: '#BBBBBB' },
  messageDetails: { alignItems: 'flex-end' },
  time: { color: '#BBBBBB', fontSize: 12 },
  unreadCount: { backgroundColor: '#03B620', borderRadius: 10, paddingHorizontal: 5, marginTop: 5 },
  unreadText: { color: 'white', fontSize: 12 },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3F3F3F',
    borderTopWidth: 1,
    borderTopColor: '#555555',
  },
  bottomBarItem: { alignItems: 'center' },
  bottomBarText: { color: 'white', fontSize: 12, marginTop: 5 },
  unreadBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#03B620',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  unreadBadgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  verifiedBadge: { marginLeft: 6 },
});

export default HomePageScreen;
