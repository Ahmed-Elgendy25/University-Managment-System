import React, { useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { VStack } from 'native-base';
import StudentsAssignmentData from '../../(components)/StudentsAssignmentData';
import StudentComponent from '../../(components)/StudentComponent';
import { useLocalSearchParams, useNavigation } from 'expo-router';
// import Student, { StudentData } from '../../Components/Student';

const students = StudentsAssignmentData;
const AsssignmentDetails = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ assignmentName: string }>();
  const { assignmentName } = params;
  useEffect(() => {
    navigation.setOptions({ title: assignmentName });
  }, []);

  const [filterCriteria, setFilterCriteria] = useState<
    'inTime' | 'late' | 'missed'
  >('inTime');
  const [searchText, setSearchText] = useState<string>('');

  const handleTabPress = (criteria: 'inTime' | 'late' | 'missed') => {
    setFilterCriteria(criteria);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredStudents = students.filter((student) => {
    student;
    const nameMatch = student.name
      .toLowerCase()
      .startsWith(searchText.toLowerCase());
    if (filterCriteria === 'inTime') {
      return nameMatch && student.inTime;
    } else if (filterCriteria === 'late') {
      return nameMatch && student.late;
    } else {
      return nameMatch && student.missed;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.taps}>
          <Pressable
            onPress={() => handleTabPress('inTime')}
            style={[
              styles.tab,
              filterCriteria === 'inTime' && styles.activeTab,
            ]}
          >
            <Text style={[styles.text, filterCriteria === 'inTime' && {color:'white'}]}>In Time</Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('late')}
            style={[styles.tab, filterCriteria === 'late' && styles.activeTab]}
          >
            <Text style={[styles.text, filterCriteria === 'late' && {color:'white'}]}>Late</Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('missed')}
            style={[
              styles.tab,
              filterCriteria === 'missed' && styles.activeTab,
            ]}
          >
            <Text style={[styles.text, filterCriteria === 'missed' && {color:'white'}]}>Missed</Text>
          </Pressable>
        </View>
        <TextInput
          placeholder="Search"
          style={styles.search}
          value={searchText}
          onChangeText={handleSearchChange}
        />
      </View>
      <View style={styles.lastSection}>
        <ScrollView>
          <VStack>
            {filteredStudents.map((student) => (
              <StudentComponent key={student.id} student={student} />
            ))}
          </VStack>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topSection: {
    // paddingBottom: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  taps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  search: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 0,
    borderColor: '#F19A1A',
  },
  lastSection: {
    flex: 1,
    paddingBottom: 0,
  },
  tab: {
    width: 90,
    height: 50,
    padding: 6,
    marginHorizontal: 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#F19A1A',
  },
});

export default AsssignmentDetails;
