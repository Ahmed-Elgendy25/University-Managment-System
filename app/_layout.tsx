import React, { useState } from 'react';
import { NativeBaseProvider, theme } from 'native-base';
import { Slot, Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const _layout = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {/* <StatusBar style="light" /> */}
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#F19A1A' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="index" options={{ headerTitle: 'Login' }} />

          <Stack.Screen
            name="signup/index"
            options={{ headerTitle: 'Signup' }}
          />
          <Stack.Screen
            name="ForgetPassword/index"
            options={{
              headerTitle: 'Forget Password',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="OTP/index"
            options={{
              headerTitle: 'Verify Code',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />
          <Stack.Screen
            name="resetpassword/index"
            options={{
              headerTitle: 'Reset Password',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(student)/AssignmentScreen/index"
            options={{
              headerTitle: 'Assignments',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          {/* <Stack.Screen
            name="(student)/aaaatttt/aaaatttt"
            options={{
              headerTitle: 'aaaatttt',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          /> */}

          <Stack.Screen
            name="(student)/Attendance/AttendanceDetails/index"
            options={{
              headerTitle: 'Attendance Details',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(student)/Attendance/index"
            options={{
              headerTitle: 'Attendance',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(student)/subjectDetails/index"
            options={{
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(student)/QuizScreen/index"
            options={{
              headerTitle: 'Exams',

              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />
          <Stack.Screen
            name="(student)/ExamScreen/index"
            options={{
              headerTitle: 'Exams',
              headerShown: false,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen name="(student)/MessageScreen/index" />
          <Stack.Screen
            name="(student)/Feedback/index"
            options={{
              headerTitle: 'Feedback',
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />
          <Stack.Screen
            name="(student)/(tabs)"
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(professor)/(tabs)"
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />
          <Stack.Screen
            name="(professor)/QuizScreen/index"
            options={{
              headerTitle: 'Exams',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(professor)/AssignmentScreen/index"
            options={{
              headerTitle: 'Assignments',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(professor)/AssignmentScreen/AsssignmentDetails/AssignmentSubmitDegreeScreen/index"
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(professor)/Notifications/index"
            options={{
              headerTitle: 'Notifications',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(student)/Notifications/index"
            options={{
              headerTitle: 'Notifications',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(professor)/Attendance/index"
            options={{
              headerTitle: 'Attendance',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />
          <Stack.Screen
            name="(professor)/Attendance/CreateAttendSession/index"
            options={{
              headerTitle: 'Create Session',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(professor)/Feedback/index"
            options={{
              headerTitle: 'Feedback',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(student)/MessageMembers/index"
            options={{
              headerTitle: 'Members',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />

          <Stack.Screen
            name="(professor)/MessageMembers/index"
            options={{
              headerTitle: 'Members',
              headerShown: true,
              headerStyle: { backgroundColor: '#F19A1A' },
            }}
          />
        </Stack>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default _layout;
