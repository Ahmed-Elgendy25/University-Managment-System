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
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Exam from '../(components)/Exam';
import ExamsList from '../(components)/ExamsList';

const exams = ExamsList;

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ examName: string }>();
  const { examName } = params;

  useEffect(() => {
    navigation.setOptions({ title: examName });
  }, [examName]);

  const [filterCriteria, setFilterCriteria] = useState<
    'upcoming' | 'submit' | 'missed'
  >('upcoming');
  const [searchText, setSearchText] = useState<string>('');

  const handleTabPress = (criteria: 'upcoming' | 'submit' | 'missed') => {
    setFilterCriteria(criteria);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredExams = exams.filter((exam) => {
    const nameMatch = exam.title
      .toLowerCase()
      .startsWith(searchText.toLowerCase());
    if (filterCriteria === 'upcoming') {
      return exam.status === 'upcoming' && nameMatch;
    } else if (filterCriteria === 'submit') {
      return exam.status === 'submitted' && nameMatch;
    } else {
      return exam.status === 'missed' && nameMatch;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.tabs}>
          <Pressable
            onPress={() => handleTabPress('upcoming')}
            style={[
              styles.tab,
              filterCriteria === 'upcoming' && styles.activeTab,
            ]}
          >
            <MaterialIcons name="upcoming" size={24} color="black" />
            <Text>Upcoming</Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('submit')}
            style={[
              styles.tab,
              filterCriteria === 'submit' && styles.activeTab,
            ]}
          >
            <FontAwesome name="send-o" size={22} color="black" />
            <Text>Submit</Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('missed')}
            style={[
              styles.tab,
              filterCriteria === 'missed' && styles.activeTab,
            ]}
          >
            <MaterialIcons name="call-missed" size={24} color="black" />
            <Text>Missed</Text>
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
              {filteredExams.map((exam) => (
                <Exam key={exam.id} exam={exam} />
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
    paddingTop: 0,
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
    width: 110,
    height: 50,
    padding: 6,
    marginHorizontal: 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  activeTab: {
    backgroundColor: '#F19A1A',
  },
});

export default index;
