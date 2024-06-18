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
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  photo: any;
  unreadMessages: number;
}

const MessageMembers = () => {
  const [searchText, setSearchText] = useState('');
  const [chatData, setChatData] = useState<ChatItem[]>([
    {
      id: '1',
      name: 'John',
      lastMessage: 'Hey, how are you? I am a student. ',
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
      lastMessage: 'Can you help me with this? I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 5,
    },
    {
      id: '4',
      name: 'Emily',
      lastMessage: 'I miss you! I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '5',
      name: 'David',
      lastMessage: "Let's meet up later . ",
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 1,
    },
    {
      id: '6',
      name: 'Eve',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '7',
      name: 'Grace',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '8',
      name: 'Frank',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '9',
      name: 'Hannah',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '10',
      name: 'Isaac',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '11',
      name: 'Jack',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '12',
      name: 'Katie',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '13',
      name: 'Liam',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '14',
      name: 'Mia',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '15',
      name: 'Nathan',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '16',
      name: 'Olivia',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    },
    {
      id: '17',
      name: 'Peter',
      lastMessage: 'I am a student.',
      photo: require('../../../assets/profile_img.jpg'),
      unreadMessages: 0,
    }
    // Other chat items...
  ]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <View style={styles.link}>
      <Swipeable>
        <View style={styles.chatItem}>
          <Link push href={{ pathname: '/MessageScreen/', params: { user: item.name } }} style={styles.link}>
            <View style={styles.chatItem2}>
              <Image source={item.photo} style={styles.userPhoto} alt={item.name} />
              <View style={styles.chatText}>
                <Text style={styles.chatName}>{item.name}</Text>
              </View>
            </View>
          </Link>
        </View>
      </Swipeable>
    </View>
  );

  const renderChatList = () => {
    const dataToRender = chatData.filter((chat) => chat.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <FlatList
        data={dataToRender}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatListContent}
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
      <View style={styles.chats}>{renderChatList()}</View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    paddingBottom: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
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
  chats: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '100%',
  },
  chatItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%',
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
    width: '70%', // Adjust width as needed
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },
  chatListContent: {
    flexGrow: 1,
  },
  link: {
    width: '100%', // Adjust width as needed
  },
  // swipeable: {
  //   width: '100%', // Adjust width as needed
  // },
});

export default MessageMembers;
