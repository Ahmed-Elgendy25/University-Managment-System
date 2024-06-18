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
import Session from '../(components)/Session';
import Sessions from '../(components)/sessions';
const sessions = Sessions;

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ sessionName: string }>();
  const { sessionName } = params;

  useEffect(() => {
    navigation.setOptions({ title: sessionName });
  }, [sessionName]);

  const [filterCriteria, setFilterCriteria] = useState<
    'attend' | 'pending' | 'absence' | 'late'
  >('attend');
  const [searchText, setSearchText] = useState<string>('');

  const handleTabPress = (
    criteria: 'attend' | 'absence' | 'late' | 'pending'
  ) => {
    setFilterCriteria(criteria);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredSessions = sessions.filter((session) => {
    const nameMatch = session.title
      .toLowerCase()
      .startsWith(searchText.toLowerCase());
    if (filterCriteria === 'attend') {
      return session.status.toLowerCase() === 'attend' && nameMatch;
    } else if (filterCriteria === 'pending') {
      return session.status.toLowerCase() === 'pending' && nameMatch;
    } else if (filterCriteria === 'absence') {
      return session.status.toLowerCase() === 'absence' && nameMatch;
    } else {
      return session.status.toLowerCase() === 'late' && nameMatch;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.tabs}>
          <Pressable
            onPress={() => handleTabPress('attend')}
            style={[
              styles.tab,
              filterCriteria === 'attend' && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.textTap,
                filterCriteria === 'attend' && styles.activeTextTab,
              ]}
            >
              Attend
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('late')}
            style={[styles.tab, filterCriteria === 'late' && styles.activeTab]}
          >
            <Text
              style={[
                styles.textTap,
                filterCriteria === 'late' && styles.activeTextTab,
              ]}
            >
              Late
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('absence')}
            style={[
              styles.tab,
              filterCriteria === 'absence' && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.textTap,
                filterCriteria === 'absence' && styles.activeTextTab,
              ]}
            >
              Absence
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPress('pending')}
            style={[
              styles.tab,
              filterCriteria === 'pending' && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.textTap,
                filterCriteria === 'pending' && styles.activeTextTab,
              ]}
            >
              Pending
            </Text>
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
              {filteredSessions.map((session) => (
                <Session key={session.id} session={session} />
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
  textTap: {
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
    paddingBottom: 0,
  },
  second: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 0,
  },
  tab: {
    width: '25%',
    height: 50,
    padding: 6,
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