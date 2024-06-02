import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import { Link } from 'expo-router';

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  photo: any;
  unreadMessages: number;
}

const ChatListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [chatData, setChatData] = useState<ChatItem[]>([
    {
      id: '1',
      name: 'John',
      lastMessage: 'Hey, how are you?',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 2,
    },
    {
      id: '2',
      name: 'Alice',
      lastMessage: 'What are you doing tonight?',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '3',
      name: 'Bob',
      lastMessage: 'Can you help me with this?',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 5,
    },
    {
      id: '4',
      name: 'Emily',
      lastMessage: 'I miss you!',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '5',
      name: 'David',
      lastMessage: "Let's meet up later.",
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 1,
    },
  ]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleDeleteMessage = (chatId: string) => {
    setChatData((prevData) => prevData.filter((chat) => chat.id !== chatId));
  };

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <Swipeable renderRightActions={() => renderRightActions(item.id)}>
      <TouchableOpacity style={styles.chatItem}>
        <Link
          style={{ width: '100%', height: '100%' }}
          push
          href={{
            pathname: '/MessageScreen/',
            params: { user: item.name },
          }}
        >
          {/* <Image source={item.photo} style={styles.userPhoto} /> */}
          <Image source={item.photo} style={styles.userPhoto} alt={item.name} />
          <View style={styles.chatText}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </View>
          {item.unreadMessages > 0 && (
            <View style={styles.unreadMessagesContainer}>
              <Text style={styles.unreadMessages}>{item.unreadMessages}</Text>
            </View>
          )}
        </Link>
      </TouchableOpacity>
    </Swipeable>
  );

  const renderRightActions = (chatId: string) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => handleDeleteMessage(chatId)}
    >
      <Ionicons name="trash" size={24} color="white" />
    </TouchableOpacity>
  );

  const renderChatList = () => {
    const dataToRender = chatData.filter((chat) =>
      chat.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <FlatList
        data={dataToRender}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />
        <Ionicons name="search" size={30} color="#F19A1A" />
      </View>
      {renderChatList()}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 40,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#F19A1A',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },

  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatText: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 16,
    color: '#666666',
  },
  unreadMessagesContainer: {
    backgroundColor: 'red',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  unreadMessages: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },
});

export default ChatListScreen;
