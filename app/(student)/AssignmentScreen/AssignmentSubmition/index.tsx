import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
// import { Document, Page } from 'react-pdf';
import * as DocumentPicker from 'expo-document-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';
import * as FileSystem from 'expo-file-system';
import { Box, Button, Text } from 'native-base';
import FileViewer from 'react-native-file-viewer';
import ImageAndDocumentComponent from '../../(components)/Image&Document/ImageAndDocumentComponent';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
const index = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isUploadClicked, setIsUploadClicked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [doc, setDoc] = useState<
    { name: any; size?: any; uri: any; mimeType?: string }[]
  >([]);
  const [reviewFile, setReviewFile] = useState<any>();

  const navigation = useNavigation();
  const params = useLocalSearchParams<{ assignmentTitle: string, assignmentDetails:string, deadline: string }>();
  const { assignmentTitle } = params;
  useEffect(() => {
    navigation.setOptions({ title: assignmentTitle});
  }, [assignmentTitle]);

  const handleAssignmentSubmit = () => {
    console.log('Assignment submitted:', commentText);
    // Implement your logic for submitting the assignment here
  };

  const handleUploadClick = () => {
    setIsUploadClicked(true);
  };

  const handleReviewClick = () => {
    setIsUploadClicked(false);
  };

  const [isAttachmentModalOpen, setIsAttachmentModalOpen] =
    useState<boolean>(false);

  const openAttachmentModal = () => {
    setIsAttachmentModalOpen(true);
  };

  const closeAttachmentModal = () => {
    setIsAttachmentModalOpen(false);
  };
  let [uploadedFile, setUploadedFile] =
    useState<ImageManipulator.ImageResult | null>(null);
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
        let { name, uri, mimeType } = doc.assets[0];
        // { name: any; size: any; uri: any; type: string }
        setDoc((prevState) => [...prevState, { name, uri, mimeType }]);
      }
      console.log(doc);
    } catch (error) {
      console.log('Error picking document:', error);
      Alert.alert('Error', 'Failed to pick document. Please try again.');
    }
  };

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  async function savePhotos() {
    if (permissionResponse?.status !== 'granted') {
      await requestPermission();
    }
    let uri = doc.map((file) => file?.uri);
    uri.forEach(async (link) => await MediaLibrary.saveToLibraryAsync(link));
    Alert.alert(
      'The Picture or PDF has been saved to your documents/Gallery, Check it'
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Details:</Text>
        <View style={styles.details}>
          <Text style={styles.date}>Deadline: {params.deadline} </Text>
          <Text style={styles.description}>
            Description : {params.assignmentDetails}
          </Text>
        </View>
      </View>
      <View style={styles.assignment}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleUploadClick}
            style={[styles.button, isUploadClicked && styles.clicked]}
          >
            <Text
              style={[
                styles.buttonText,
                isUploadClicked && { color: '#ffffff' },
              ]}
            >
              Upload
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleReviewClick}
            style={[styles.button, !isUploadClicked && styles.clicked]}
          >
            <Text
              style={[
                styles.buttonText,
                !isUploadClicked && { color: '#ffffff' },
              ]}
            >
              Material
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {isUploadClicked ? (
            <ScrollView style={{ width: '100%', padding: 5 }}>
              {doc &&
                doc.map((doc) => (
                  <ImageAndDocumentComponent
                    alt={doc.name}
                    savePhotos={savePhotos}
                  >
                    {doc.mimeType?.startsWith('image') ? (
                      <Image
                        source={{ uri: doc?.uri }}
                        alt={doc.name}
                        style={{
                          width: '20%',
                          height: 50,
                          aspectRatio: 1 / 1,
                          borderTopLeftRadius: 6,
                        }}
                      />
                    ) : (
                      <AntDesign
                        name="pdffile1"
                        size={48}
                        color="#F19A1A"
                        style={{padding: 10}}
                      />
                    )}
                  </ImageAndDocumentComponent>
                ))}
            </ScrollView>
          ) : (
            <Button bgColor={'white'}>
              <Text
                color={'#F19A1A'}
                fontWeight={'semibold'}
                p={'4'}
                fontSize={'lg'}
              >
                Download
              </Text>
            </Button>
          )}
        </View>
      </View>
      {!isUploadClicked ? null : (
        <View style={styles.form}>
          <TextInput
            placeholder="Add Comment "
            onChangeText={setCommentText}
            value={commentText}
            style={styles.input}
          />

          <Entypo
            name="attachment"
            size={24}
            color="#F19A1A"
            onPress={pickDocument}
            style={{ marginHorizontal: 3 }}
          />

          <TouchableOpacity
            onPress={handleAssignmentSubmit}
            style={styles.submitButton}
            disabled={!doc}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    height: 200,
    padding: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    paddingTop: 10,
    marginLeft: 6,
    paddingBottom: 20,
    color: '#F19A1A',
    fontWeight: 'bold',
  },
  details: {
    marginBottom: 20,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  date: {
    color: '#F19A1A',
    marginBottom: 10,
  },
  description: {
    color: '#F19A1A',
    marginBottom: 10,
  },
  assignment: {
    flex: 1,
    borderRadius: 25,
    margin: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 0,
  },
  button: {
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F19A1A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#F19A1A',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  form: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#F19A1A',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#F19A1A',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clicked: {
    backgroundColor: '#F19A1A',
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

  containerWebView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
