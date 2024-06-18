import React from 'react';
import { quizzList } from './ExamsList';
import { Box, Flex, VStack, Text, Center, Heading } from 'native-base';
import { Link } from 'expo-router';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AttendanceList = () => {
  return (
    <>
      {quizzList.map((quiz) => {
        return (
          <Link
            key={quiz.name}
            push
            href={{
              pathname: '/Attendance/AttendanceDetails/',
              params: { name: quiz.name },
            }}
            asChild
          >
            <Pressable>
              <Center>
                <VStack p={'3'}>
                  <Flex
                    direction="row"
                    h={'32'}
                    px={'2'}
                    rounded={'3xl'}
                    bgColor={'#F19A1A'}
                  >
                    <Flex
                      justifyContent={'center'}
                      alignItems={'center'}
                      direction="column"
                      h={'full'}
                      p={'3'}
                      w={'full'}
                    >
                      <Heading size={'lg'} color={'white'}>
                        Instructor: Dr.Ahmed Emad
                      </Heading>

                      <Heading size={'sm'} mt={2} color={'white'}>
                        Start Time: <Text>{quiz.startTime}</Text>
                      </Heading>
                    </Flex>
                  </Flex>
                </VStack>
              </Center>
            </Pressable>
          </Link>
        );
      })}
    </>
  );
};

export default AttendanceList;
