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
// import { StudentProps } from '../../(components)/professor-types';
import Students from '../../(components)/Students';
import StudentComponent from '../../(components)/StudentComponent';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const students = Students;
const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ examName: string }>();
  const { examName } = params;
  useEffect(() => {
    navigation.setOptions({ title: examName });
  }, []);

  const [filterCriteria, setFilterCriteria] = useState<
    'passed' | 'notPassed' | 'missed'
  >('passed');
  const [searchText, setSearchText] = useState<string>('');

  const handleTabPress = (criteria: 'passed' | 'notPassed' | 'missed') => {
    setFilterCriteria(criteria);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredStudents = students.filter((student) => {
    const nameMatch = student.name
      .toLowerCase()
      .startsWith(searchText.toLowerCase());
    if (filterCriteria === 'passed') {
      return nameMatch && student.passed && !student.missed; //&& parseInt(student.score.split('/')[0]) >= 5
    } else if (filterCriteria === 'notPassed') {
      return nameMatch && !student.passed && !student.missed; //&& parseInt(student.score.split('/')[0]) < 5
    } else {
      return nameMatch && student.missed;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.tabs}>
          <Pressable
            onPress={() => handleTabPress('passed')}
            style={[
              styles.tab,
              filterCriteria === 'passed' && styles.activeTab,
            ]}
          >
            <Text style={[styles.text, filterCriteria === 'passed' && {color:'white'}]}>Passed</Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('notPassed')}
            style={[
              styles.tab,
              filterCriteria === 'notPassed' && styles.activeTab,
            ]}
          >
            <Text style={[styles.text, filterCriteria === 'notPassed' && {color:'white'}]}>Not Passed</Text>
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
      </View>
      <View style={styles.lastSection}>
        <View style={styles.second}>
          <TextInput
            placeholder="Search"
            style={styles.search}
            value={searchText}
            onChangeText={handleSearchChange}
          />
          <ScrollView>
            <VStack>
              {filteredStudents.map((student) => (
                <StudentComponent key={student.id} student={student} />
              ))}
            </VStack>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  topSection: {
    paddingTop: 20,
    textAlign: 'center',
    paddingBottom: 10,
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginBottom: 10,
    borderColor: '#F19A1A',
  },
  lastSection: {
    flex: 1,
    paddingBottom: 0,
  },
  second: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 0,
  },
  tab: {
    width: 100,
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

export default index;
