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

  const [filterCriteria, setFilterCriteria] = useState<'upcoming' | 'submit' | 'missed'>('upcoming');
  const [searchText, setSearchText] = useState<string>('');

  const handleTabPress = (criteria: 'upcoming' | 'submit' | 'missed') => {
    setFilterCriteria(criteria);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredExams = exams.filter((exam) => {
    const nameMatch = exam.title.toLowerCase().startsWith(searchText.toLowerCase());
    return (
      (filterCriteria === 'upcoming' && exam.status === 'upcoming' && nameMatch) ||
      (filterCriteria === 'submit' && exam.status === 'submitted' && nameMatch) ||
      (filterCriteria === 'missed' && exam.status === 'missed' && nameMatch)
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.tabs}>
          <TabButton onPress={() => handleTabPress('upcoming')} icon="calendar" label="Upcoming" active={filterCriteria === 'upcoming'} />
          <TabButton onPress={() => handleTabPress('submit')} icon="send-o" label="Submit" active={filterCriteria === 'submit'} />
          <TabButton onPress={() => handleTabPress('missed')} icon="call-missed" label="Missed" active={filterCriteria === 'missed'} />
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

const TabButton = ({ onPress, icon, label, active }: { onPress: () => void; icon: string; label: string; active: boolean }) => (
  <Pressable onPress={onPress} style={[styles.tab, active && styles.activeTab]}>
    {
      icon === 'call-missed'
      ? <MaterialIcons name={icon} size={24} color={active ? 'white' : 'black'} />
      : <FontAwesome name={icon} size={24} color={active ? 'white' : 'black'} />
    }
    <Text style={[styles.textTab, active && styles.activeTextTab]}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  topSection: {
    paddingTop: 20,
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTab: {
    fontWeight: '500',
  },
  activeTextTab: {
    color: 'white',
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
  },
  second: {
    flex: 1,
    paddingTop: 10,
  },
  tab: {
    width: '33%',
    height: 50,
    padding: 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  activeTab: {
    backgroundColor: '#F19A1A',
  },
});

export default index;
