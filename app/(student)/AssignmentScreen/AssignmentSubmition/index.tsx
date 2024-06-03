import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
// import { Document, Page } from 'react-pdf';
import * as DocumentPicker from 'expo-document-picker';
import { Box, Button, Text } from 'native-base';

const index = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isUploadClicked, setIsUploadClicked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [doc, setDoc] = useState<
    { name: any; size?: any; uri: any; type?: string } | undefined
  >(undefined);
  const [reviewFile, setReviewFile] = useState<any>();

  const navigation = useNavigation();
  const params = useLocalSearchParams<{ title: string }>();
  const { title } = params;
  useEffect(() => {
    navigation.setOptions({ title });
  }, [title]);

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Details:</Text>
        <View style={styles.details}>
          <Text style={styles.date}>Date Time : after week</Text>
          <Text style={styles.description}>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Non beatae vero odit distinctio ut corrupti veniam praesentium
            voluptates, officia nobis.
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
              Review
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {isUploadClicked ? (
            <View>
              {doc ? (
                <Text>{doc.uri}</Text>
              ) : doc ? (
                <Box>
                  <Text>{doc.uri}</Text>
                </Box>
              ) : null}
            </View>
          ) : (
            <Text>Review</Text>
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
          <TouchableOpacity
            onPress={handleAssignmentSubmit}
            style={styles.submitButton}
            disabled={!doc}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          <Button
            bgColor={'white'}
            size={'md'}
            width={'24'}
            onPress={pickDocument}
          >
            <Text color={'#F19A1A'} fontWeight={'bold'} fontSize={'lg'}>
              Attach
            </Text>
          </Button>
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
    paddingTop: 40,
    padding: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    paddingTop: 0,
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
});
