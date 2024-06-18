import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { router } from 'expo-router';
const ProfileScreen: React.FC = () => {
  const defaultImage = require('../../../assets/profile_img.jpg');
  const [profilePhoto, setProfilePhoto] = useState<any>(defaultImage);

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
        setProfilePhoto(croppedResult);
        return croppedResult;
      }
    } catch (error) {
      console.log('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };

  const handleLogout = () => {
    // Add your logout logic here, such as clearing user data, navigating to the login screen, etc.
    console.log('Logout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.profilePhotoContainer}>
            <Image source={profilePhoto} style={styles.profilePhoto} />
            <View style={styles.editIconContainer}>
              <AntDesign name="edit" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.userName}>Ahmed Emad</Text>
        <Text style={styles.email}>id@o6u.edu.eg</Text>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionHeader}>Account Settings</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text>Account Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text>Email notification preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text>Learning reminders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.supportSection}>
        <Text style={styles.sectionHeader}>Support</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text>Frequently asked questions</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  profileSection: {
    flex: 0.4,
    marginTop: 40,
    alignItems: 'center'
  },
  profilePhotoContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 15,
    padding: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  settingsSection: {
    flex: 0.23,
    width: '100%',
    marginBottom: 20,
  },
  supportSection: {
    flex: 0.23,
    width: '100%',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
