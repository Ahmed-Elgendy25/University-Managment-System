import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Box, Image } from 'native-base';

interface Message {
  id: number;
  text: string;
  sender: 'self' | 'other';
}

const MessagesScreen = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ user: string }>();
  const { user } = params;

  const [doc, setDoc] = useState<
    { name: any; size?: any; uri: any; type?: string } | undefined
  >(undefined);

  useEffect(() => {
    if (user) {
      navigation.setOptions({ title: user });
    }
  }, [user]);

  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello!', sender: 'other' },
    { id: 2, text: 'Hey there!', sender: 'self' },
    { id: 3, text: 'How are you?', sender: 'other' },
    { id: 4, text: "I'm good, thank you!", sender: 'self' },
    { id: 5, text: 'What are you doing?', sender: 'other' },
    { id: 6, text: 'Just working on some stuff.', sender: 'self' },
    { id: 7, text: 'That sounds interesting!', sender: 'other' },
    { id: 8, text: "Yeah, it's pretty fun!", sender: 'self' },
  ]);

  let [uploadedFile, setUploadedFile] =
    useState<ImageManipulator.ImageResult | null>(null);

  const [isAttachmentModalOpen, setIsAttachmentModalOpen] =
    useState<boolean>(false);

  const openAttachmentModal = () => {
    setIsAttachmentModalOpen(true);
  };

  const closeAttachmentModal = () => {
    setIsAttachmentModalOpen(false);
  };

  const handleAttachmentSelection = async (type: 'image' | 'document') => {
    let file;
    if (type === 'image') {
      file = await pickImage();
    } else if (type === 'document') {
      file = await pickDocument();
    }
    if (file) {
      console.log('Selected file:', file);
      setUploadedFile(file);
    }
    closeAttachmentModal();
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const { uri } = result.assets[0];
        const croppedResult = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 300 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
        );
        return croppedResult;
      }
    } catch (error) {
      console.log('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };

  const pickDocument = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({ type: '*/*' });
      if (!doc.canceled) {
        console.log(doc.output);
        let { name, uri } = doc.assets[0];
        // { name: any; size: any; uri: any; type: string }
        setDoc({ name, uri });
      }
      console.log(doc);
    } catch (error) {
      console.log('Error picking document:', error);
      Alert.alert('Error', 'Failed to pick document. Please try again.');
    }
  };

  // const pickDocument = async () => {
  //   let result = await DocumentPicker.getDocumentAsync({
  //     type: '*/*',
  //     copyToCacheDirectory: true,
  //   }).then((response) => {
  //     if (response.type == 'success') {
  //       let { name, size, uri } = response;

  //       if (uri[0] === '/') {
  //         uri = `file://${uri}`;
  //         uri = uri.replace(/%/g, '%25');
  //       }

  //       let nameParts = name.split('.');
  //       let fileType = nameParts[nameParts.length - 1];
  //       var fileToUpload = {
  //         name: name,
  //         size: size,
  //         uri: uri,
  //         type: 'application/' + fileType,
  //       };
  //       console.log(fileToUpload, '...............file');
  //       setDoc(fileToUpload);
  //     }
  //   });
  //   console.log('Doc: ' + doc.uri);
  // };
  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'self',
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={
              message.sender === 'self'
                ? styles.selfMessage
                : styles.otherMessage
            }
          >
            {message.text && (
              <Text
                style={
                  message.sender === 'self' ? styles.selfText : styles.otherText
                }
              >
                {message.text}
              </Text>
            )}
          </View>
        ))}

        {doc?.uri && (
          <Box height={'full'}>
            <Image
              source={{ uri: doc?.uri }}
              w={'md'}
              height={'md'}
              alt={doc?.name}
            />
          </Box>
        )}

        {uploadedFile?.uri && (
          <Box height={'full'}>
            <Image
              source={{ uri: uploadedFile?.uri }}
              w={uploadedFile?.width}
              height={uploadedFile?.height}
              alt={'Image'}
            />
          </Box>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  messageContainer: {
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  attachmentButton: {
    marginRight: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
  },
  sendButton: {
    backgroundColor: '#F19A1A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  attachmentOption: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  selfMessage: {
    backgroundColor: '#F19A1A',
    alignSelf: 'flex-end',
    maxWidth: '70%',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  otherMessage: {
    backgroundColor: '#ddd',
    alignSelf: 'flex-start',
    maxWidth: '70%',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  selfText: {
    color: 'white',
  },
  otherText: {
    color: '#000',
  },
});

export default MessagesScreen;

// import React, { useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Modal,
//   Alert,
// } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import * as ImageManipulator from 'expo-image-manipulator';
// import * as DocumentPicker from 'expo-document-picker';
// import * as FileSystem from 'expo-file-system';

// import { useLocalSearchParams, useNavigation } from 'expo-router';

// interface Message {
//   id: number;
//   text: string;
//   sender: 'self' | 'other';
// }

// const MessagesScreen = () => {
//   const navigation = useNavigation();
//   const params = useLocalSearchParams<{ user: string }>();
//   const { user } = params;

//   const [doc, setDoc] = useState<
//     { name: any; size: any; uri: any; type: string } | undefined
//   >(undefined);

//   useEffect(() => {
//     if (user) {
//       navigation.setOptions({ title: user });
//     }
//   }, [user]);

//   const [inputText, setInputText] = useState<string>('');
//   const [messages, setMessages] = useState<Message[]>([
//     { id: 1, text: 'Hello!', sender: 'other' },
//     { id: 2, text: 'Hey there!', sender: 'self' },
//     { id: 3, text: 'How are you?', sender: 'other' },
//     { id: 4, text: "I'm good, thank you!", sender: 'self' },
//     { id: 5, text: 'What are you doing?', sender: 'other' },
//     { id: 6, text: 'Just working on some stuff.', sender: 'self' },
//     { id: 7, text: 'That sounds interesting!', sender: 'other' },
//     { id: 8, text: "Yeah, it's pretty fun!", sender: 'self' },
//   ]);

//   let [uploadedFile, setUploadedFile] = useState<
//     ImageManipulator.ImageResult | DocumentPicker.DocumentPickerResult | null
//   >(null);
//   const [isAttachmentModalOpen, setIsAttachmentModalOpen] =
//     useState<boolean>(false);

//   const openAttachmentModal = () => {
//     setIsAttachmentModalOpen(true);
//   };

//   const closeAttachmentModal = () => {
//     setIsAttachmentModalOpen(false);
//   };

//   const handleAttachmentSelection = async (type: 'image' | 'document') => {
//     let file;
//     if (type === 'image') {
//       file = await pickImage();
//     } else if (type === 'document') {
//       file = await pickDocument();
//     }
//     if (file) {
//       console.log('Selected file:', file);
//       setUploadedFile(file);
//     }
//     closeAttachmentModal();
//   };

//   const pickImage = async () => {
//     try {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         quality: 1,
//       });

//       if (!result.canceled) {
//         const { uri } = result.assets[0];
//         const croppedResult = await ImageManipulator.manipulateAsync(
//           uri,
//           [{ resize: { width: 300 } }],
//           { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
//         );
//         return croppedResult;
//       }
//     } catch (error) {
//       console.log('Error picking image:', error);
//       Alert.alert('Error', 'Failed to pick image. Please try again.');
//     }
//   };

//   const pickDocument = async () => {
//     try {
//       let result = await DocumentPicker.getDocumentAsync({
//         type: '*/*',
//         copyToCacheDirectory: true,
//       });

//       if (result.type === 'success') {
//         let { name, size, uri } = response;

//         return result;
//       }
//     } catch (error) {
//       console.log('Error picking document:', error);
//       Alert.alert('Error', 'Failed to pick document. Please try again.');
//     }
//   };

//   // const pickDocument = async () => {
//   //   let result = await DocumentPicker.getDocumentAsync({
//   //     type: '*/*',
//   //     copyToCacheDirectory: true,
//   //   }).then((response) => {
//   //     if (response.type == 'success') {
//   //       let { name, size, uri } = response;

//   //       if (uri[0] === '/') {
//   //         uri = `file://${uri}`;
//   //         uri = uri.replace(/%/g, '%25');
//   //       }

//   //       let nameParts = name.split('.');
//   //       let fileType = nameParts[nameParts.length - 1];
//   //       var fileToUpload = {
//   //         name: name,
//   //         size: size,
//   //         uri: uri,
//   //         type: 'application/' + fileType,
//   //       };
//   //       console.log(fileToUpload, '...............file');
//   //       setDoc(fileToUpload);
//   //     }
//   //   });
//   //   console.log('Doc: ' + doc.uri);
//   // };
//   const sendMessage = () => {
//     if (inputText.trim() === '') return;

//     const newMessage: Message = {
//       id: messages.length + 1,
//       text: inputText,
//       sender: 'self',
//     };
//     setMessages([...messages, newMessage]);
//     setInputText('');
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.messageContainer}>
//         {messages.map((message) => (
//           <View
//             key={message.id}
//             style={
//               message.sender === 'self'
//                 ? styles.selfMessage
//                 : styles.otherMessage
//             }
//           >
//             <Text
//               style={
//                 message.sender === 'self' ? styles.selfText : styles.otherText
//               }
//             >
//               {message.text}
//             </Text>
//           </View>
//         ))}
//       </ScrollView>
//       <View style={styles.inputContainer}>
//         <TouchableOpacity
//           style={styles.attachmentButton}
//           onPress={openAttachmentModal}
//         >
//           <MaterialIcons name="attachment" size={24} color="#F19A1A" />
//         </TouchableOpacity>
//         <TextInput
//           style={styles.input}
//           placeholder="Type your message..."
//           value={inputText}
//           onChangeText={setInputText}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isAttachmentModalOpen}
//         onRequestClose={closeAttachmentModal}
//       >
//         <View style={styles.modalContainer}>
//           <TouchableOpacity
//             style={styles.attachmentOption}
//             onPress={() => handleAttachmentSelection('image')}
//           >
//             <Text>Pick Image</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.attachmentOption}
//             onPress={() => handleAttachmentSelection('document')}
//           >
//             <Text>Pick Document</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.attachmentOption, { backgroundColor: '#FF0000' }]}
//             onPress={closeAttachmentModal}
//           >
//             <Text style={{ color: '#FFFFFF' }}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//   },
//   messageContainer: {
//     paddingHorizontal: 16,
//     paddingTop: 40,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   attachmentButton: {
//     marginRight: 16,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     marginRight: 16,
//   },
//   sendButton: {
//     backgroundColor: '#F19A1A',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   attachmentOption: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   selfMessage: {
//     backgroundColor: '#F19A1A',
//     alignSelf: 'flex-end',
//     maxWidth: '70%',
//     padding: 8,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   otherMessage: {
//     backgroundColor: '#ddd',
//     alignSelf: 'flex-start',
//     maxWidth: '70%',
//     padding: 8,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   selfText: {
//     color: 'white',
//   },
//   otherText: {
//     color: '#000',
//   },
// });

// export default MessagesScreen;
