import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const messages = [
  { id: '1', sender: 'Etornam', message: 'Hey there!', time: '10:00 AM', date: 'Today', received: true },
  { id: '2', sender: 'You', message: 'Hello!', time: '10:02 AM', date: 'Today', received: false },
  { id: '3', sender: 'Etornam', message: 'How are you?', time: '10:05 AM', date: 'Today', received: true },
  { id: '4', sender: 'You', message: "I'm good, thanks!", time: '10:06 AM', date: 'Today', received: false },
  { id: '5', sender: 'Etornam', message: 'Great to hear!', time: '10:10 AM', date: 'Today', received: true },
];

const MessageScreen = () => {
  const renderItem = ({ item }) => (
    <View>
      {item.date && <Text style={styles.date}>{item.date}</Text>}
      <View style={[styles.messageContainer, item.received ? styles.receivedMessage : styles.sentMessage]}>
        <Text style={styles.messageText}>{item.message}</Text>
        <View style={styles.messageFooter}>
          <Text style={styles.time}>{item.time}</Text>
          {!item.received && <MaterialCommunityIcons name="check-double" size={16} color="#ffffff" />}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/P1.jpeg')} style={styles.profileImage} />
        <Text style={styles.headerText}>Etornam</Text>
        <View style={styles.headerIcons}>
          <MaterialIcons name="video-call" size={28} color="white" />
          <MaterialIcons name="call" size={24} color="white" />
        </View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View style={styles.footer}>
        <MaterialCommunityIcons name="plus" size={28} color="#03B620" />
        <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#999999" />
        <MaterialCommunityIcons name="sticker-emoji" size={24} color="#03B620" />
        <MaterialCommunityIcons name="camera" size={24} color="#03B620" />
        <MaterialCommunityIcons name="microphone" size={24} color="#03B620" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2F2F2F' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555555',
    backgroundColor: '#3F3F3F',
  },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  headerText: { flex: 1, color: '#FFFFFF', fontSize: 18, marginLeft: 10 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  messageList: { flex: 1, padding: 10 },
  date: { textAlign: 'center', color: '#FFFFFF', marginVertical: 10 },
  messageContainer: { borderRadius: 10, padding: 10, marginBottom: 10, maxWidth: '80%' },
  receivedMessage: { backgroundColor: '#484848', alignSelf: 'flex-start' },
  sentMessage: { backgroundColor: '#03B620', alignSelf: 'flex-end' },
  messageText: { color: '#FFFFFF', marginBottom: 5 },
  messageFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  time: { color: '#BBBBBB', fontSize: 12 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#555555',
    padding: 10,
    backgroundColor: '#3F3F3F',
  },
  input: {
    flex: 1,
    backgroundColor: '#484848',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
});

export default MessageScreen;
