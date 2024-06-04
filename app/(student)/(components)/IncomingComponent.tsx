import React from 'react';
import { quizzList } from './ExamsList';
import { Box, Flex, VStack, Text, Center, Heading } from 'native-base';
import { Link } from 'expo-router';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IncomingComponent = () => {
  return (
    <>
      {quizzList.map((quiz) => {
        return (
          <Link
            key={quiz.name}
            push
            href={{
              pathname: '/QuizDetails/',
              params: { name: quiz.name },
            }}
            disabled={true}
            asChild
          >
            <Pressable>
              <Center>
                <VStack p={'3'}>
                  <Flex
                    direction="row"
                    h={'32'}
                    w={'3/4'}
                    rounded={'3xl'}
                    bgColor={'#d68a18a0'}
                  >
                    <Flex
                      justifyContent={'space-between'}
                      direction="column"
                      h={'full'}
                      p={3}
                    >
                      <Heading size={'lg'} color={'white'}>
                        Compiler Theory
                      </Heading>
                      <Text color={'white'} fontSize={'sm'}>
                        Instructor:
                        <Text fontWeight={'bold'}> DR.Ahmed Emad</Text>
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'space-between'}
                      direction="column"
                      h={'full'}
                      p={3}
                    >
                      <Heading size={'sm'} mt={2} color={'white'}>
                        Start Date: <Text>{quiz.startDate}</Text>
                      </Heading>
                      <Heading size={'sm'} mt={2} color={'white'}>
                        StartTime: <Text>{quiz.startTime}</Text>
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

export default IncomingComponent;
