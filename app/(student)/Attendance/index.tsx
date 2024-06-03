import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Flex } from 'native-base';
import ButtonComponent from '../(components)/ButtonComponent';
import ButtonComponentAttendance from '../(components)/ButtonComponentAttendance';
import AttendanceList from '../(components)/AttendanceList';

const index = () => {
  return (
    <ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 15, marginBottom: 5 }}
      >
        <ButtonComponentAttendance path="Attend">
          <Text>Attend</Text>
        </ButtonComponentAttendance>

        <ButtonComponentAttendance path="Absence">
          <Text>Absence</Text>
        </ButtonComponentAttendance>

        <ButtonComponentAttendance path="Late">
          <Text>Late</Text>
        </ButtonComponentAttendance>

        <ButtonComponentAttendance path="Pending">
          <Text>Pending</Text>
        </ButtonComponentAttendance>
      </ScrollView>
      <AttendanceList />
      <AttendanceList />
      <AttendanceList />
      <AttendanceList />
      <AttendanceList />
      <AttendanceList />
    </ScrollView>
  );
};

export default index;
