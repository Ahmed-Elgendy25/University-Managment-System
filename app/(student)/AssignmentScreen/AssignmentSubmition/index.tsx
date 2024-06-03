import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Box, Button, ScrollView, Text } from 'native-base';
import Pdf from 'react-native-pdf';
import ImageComponent from '../../(components)/PDF & ImageComponent/ImageComponent';

interface AssignmentData {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: string;
  downloadLink: string;
}

const AssignmentsData: AssignmentData[] = [
  {
    id: 1,
    title: 'Assignment 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    deadline: '2024-07-01',
    status: 'pending',
    downloadLink: 'https://example.com/assignment1_download_link',
  },
  {
    id: 2,
    title: 'Assignment 2',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    deadline: '2024-07-05',
    status: 'completed',
    downloadLink: 'https://example.com/assignment2_download_link',
  },
  {
    id: 3,
    title: 'Assignment 3',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    deadline: '2024-07-10',
    status: 'pending',
    downloadLink: 'https://example.com/assignment3_download_link',
  },
  // Add more assignments as needed
];

const Index = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isUploadClicked, setIsUploadClicked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [docs, setDocs] = useState<
    { name: string; uri: string; mimeType: string }[]
  >([]);

  const [reviewFile, setReviewFile] = useState();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [AssignmentFile, setAssignmentFile] = useState<AssignmentData>(
    AssignmentsData[0]
  );

  const [isPdfVisible, setIsPdfVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const handleAssignmentSubmit = () => {
    console.log('Assignment submitted:', commentText);
    // Implement your logic for submitting the assignment here
  };

  const handleUploadClick = () => {
    setIsUploadClicked(true);
    // setDocs(undefined); // Reset selected document
  };

  const handleDownload = (link: string) => {
    console.log('Downloading:', link);
    // Implement your logic for downloading the assignment here
  };

  const handleReviewClick = () => {
    setIsUploadClicked(false);
  };

  const pickDocument = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
        type: [
          'image/*', // Accepts all image types
          'application/pdf', // Example: Accepts PDF files
          'application/msword', // Example: Accepts MS Word files
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Example: Accepts MS Word files (.docx)
          // Add more MIME types as needed
        ],
      });
      if (!doc.canceled) {
        console.log(doc.output);
        let { name, uri, mimeType } = doc.assets[0];
        const validMimeType = mimeType || 'application/octet-stream'; // Default MIME type if undefined
        setDocs((prevDocs) => [
          ...prevDocs,
          { name, uri, mimeType: validMimeType },
        ]);
        // setSelectedFile(null);
      }
      console.log(doc);
    } catch (error) {
      console.log('Error picking document:', error);
      Alert.alert('Error', 'Failed to pick document. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={
          isUploadClicked
            ? [styles.header, { height: 200 }]
            : [styles.header, { height: 250 }]
        }
      >
        <Text style={styles.titleDetails}>Details:</Text>
        <View style={styles.details}>
          <Text style={styles.date}>Date Time : after week</Text>
          <Text style={styles.description}>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Non beatae vero odit distinctio ut corrupti veniam praesentium
            voluptates, officia nobis.
          </Text>
        </View>
        <View>
          {isUploadClicked ? null : (
            <TouchableOpacity
              onPress={handleDownload.bind(this, AssignmentFile.downloadLink)}
              style={styles.downloadButton}
              disabled={!docs}
            >
              <Text style={styles.downloadButtonText}>Download</Text>
            </TouchableOpacity>
          )}
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
          <ScrollView>
            {isUploadClicked ? (
              <View>
                {docs ? (
                  docs.map((doc, id) => {
                    if (doc.mimeType.startsWith('image')) {
                      return (
                        <ImageComponent key={id} name={doc.name}>
                          <Image
                            source={{ uri: doc.uri }}
                            style={{
                              width: 50,
                              height: 50,
                              aspectRatio: '1/1',
                              borderTopLeftRadius: 9,
                            }}
                          />
                        </ImageComponent>
                      );
                    } else {
                      const PdfResource = {
                        uri: doc.uri,
                        cache: true,
                      };

                      return (
                        <Pdf
                          trustAllCerts={false}
                          source={PdfResource} // Fix: Pass doc.uri as a Source object
                          onLoadComplete={(numberOfPages, filePath) => {
                            console.log(`number of pages: ${numberOfPages}`);
                          }}
                        />
                      );
                    }
                  })
                ) : (
                  <Text style={styles.text}>No File selected</Text>
                )}
              </View>
            ) : (
              <Text style={styles.text}>Review</Text>
            )}
          </ScrollView>
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
          <Button bgColor={'white'} onPress={pickDocument}>
            <Ionicons name="attach" size={35} color="#F19A1A" />
          </Button>
          <TouchableOpacity
            onPress={handleAssignmentSubmit}
            style={styles.submitButton}
            disabled={!docs}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    padding: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  titleDetails: {
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
    width: '100%',
    backgroundColor: '#F19A1A',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  form: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: '#F19A1A',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    marginRight: 0,
  },
  submitButton: {
    backgroundColor: '#F19A1A',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  downloadButton: {
    backgroundColor: '#F19A1A',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
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

// import { useLocalSearchParams, useNavigation } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// // import { Document, Page } from 'react-pdf';
// import * as DocumentPicker from 'expo-document-picker';
// import { Box, Button, Text } from 'native-base';

// const index = () => {
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [isUploadClicked, setIsUploadClicked] = useState(false);
//   const [commentText, setCommentText] = useState('');
//   const [doc, setDoc] = useState<
//     { name: any; size?: any; uri: any; type?: string } | undefined
//   >(undefined);
//   const [reviewFile, setReviewFile] = useState<any>();

//   const navigation = useNavigation();
//   const params = useLocalSearchParams<{ title: string }>();
//   const { title } = params;
//   useEffect(() => {
//     navigation.setOptions({ title });
//   }, [title]);

//   const handleAssignmentSubmit = () => {
//     console.log('Assignment submitted:', commentText);
//     // Implement your logic for submitting the assignment here
//   };

//   const handleUploadClick = () => {
//     setIsUploadClicked(true);
//   };

//   const handleReviewClick = () => {
//     setIsUploadClicked(false);
//   };

//   const pickDocument = async () => {
//     try {
//       const doc = await DocumentPicker.getDocumentAsync({ type: '*/*' });
//       if (!doc.canceled) {
//         console.log(doc.output);
//         let { name, uri } = doc.assets[0];
//         // { name: any; size: any; uri: any; type: string }
//         setDoc({ name, uri });
//       }
//       console.log(doc);
//     } catch (error) {
//       console.log('Error picking document:', error);
//       Alert.alert('Error', 'Failed to pick document. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Details:</Text>
//         <View style={styles.details}>
//           <Text style={styles.date}>Date Time : after week</Text>
//           <Text style={styles.description}>
//             Description : Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Non beatae vero odit distinctio ut corrupti veniam praesentium
//             voluptates, officia nobis.
//           </Text>
//         </View>
//       </View>
//       <View style={styles.assignment}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={handleUploadClick}
//             style={[styles.button, isUploadClicked && styles.clicked]}
//           >
//             <Text
//               style={[
//                 styles.buttonText,
//                 isUploadClicked && { color: '#ffffff' },
//               ]}
//             >
//               Upload
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={handleReviewClick}
//             style={[styles.button, !isUploadClicked && styles.clicked]}
//           >
//             <Text
//               style={[
//                 styles.buttonText,
//                 !isUploadClicked && { color: '#ffffff' },
//               ]}
//             >
//               Review
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.content}>
//           {isUploadClicked ? (
//             <View>
//               {doc ? (
//                 <Text>{doc.uri}</Text>
//               ) : doc ? (
//                 <Box>
//                   <Text>{doc.uri}</Text>
//                 </Box>
//               ) : null}
//             </View>
//           ) : (
//             <Text>Review</Text>
//           )}
//         </View>
//       </View>
//       {!isUploadClicked ? null : (
//         <View style={styles.form}>
//           <TextInput
//             placeholder="Add Comment "
//             onChangeText={setCommentText}
//             value={commentText}
//             style={styles.input}
//           />
//           <TouchableOpacity
//             onPress={handleAssignmentSubmit}
//             style={styles.submitButton}
//             disabled={!doc}
//           >
//             <Text style={styles.submitButtonText}>Submit</Text>
//           </TouchableOpacity>

//           <Button
//             bgColor={'white'}
//             size={'md'}
//             width={'24'}
//             onPress={pickDocument}
//           >
//             <Text color={'#F19A1A'} fontWeight={'bold'} fontSize={'lg'}>
//               Attach
//             </Text>
//           </Button>
//         </View>
//       )}
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fefefe',
//   },
//   header: {
//     height: 200,
//     paddingTop: 40,
//     padding: 20,
//     borderBottomRightRadius: 25,
//     borderBottomLeftRadius: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   title: {
//     fontSize: 24,
//     paddingTop: 0,
//     marginLeft: 6,
//     paddingBottom: 20,
//     color: '#F19A1A',
//     fontWeight: 'bold',
//   },
//   details: {
//     marginBottom: 20,
//     paddingLeft: 10,
//     paddingBottom: 10,
//   },
//   date: {
//     color: '#F19A1A',
//     marginBottom: 10,
//   },
//   description: {
//     color: '#F19A1A',
//     marginBottom: 10,
//   },
//   assignment: {
//     flex: 1,
//     borderRadius: 25,
//     margin: 40,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     padding: 0,
//   },
//   button: {
//     flex: 1,
//     padding: 10,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#F19A1A',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   content: {
//     flex: 1,
//     backgroundColor: '#F19A1A',
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   form: {
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#F19A1A',
//     padding: 10,
//     margin: 10,
//     borderRadius: 5,
//   },
//   submitButton: {
//     backgroundColor: '#F19A1A',
//     padding: 10,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   submitButtonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   clicked: {
//     backgroundColor: '#F19A1A',
//   },
// });
