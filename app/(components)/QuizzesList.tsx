import React from 'react';
import { quizzList } from './quiz-list';
import { Box, Flex, VStack, Text } from 'native-base';
import { Link } from 'expo-router';

const QuizzesList = () => {
  return (
    <>
      {quizzList.map((quiz) => {
        return (
          <Link key={quiz.name} push href="/QuizDetails">
            <VStack
              bgColor={'warmGray.500'}
              borderBottomWidth={'1'}
              borderBottomColor={'#2c2c2c59'}
              py={'25px'}
              px={'15px'}
            >
              <Flex direction="row" justifyContent={'space-between'}>
                <Box>
                  <Text
                    color={'black'}
                    fontWeight={'extrabold'}
                    fontSize={'2xl'}
                  >
                    {quiz.name}
                  </Text>
                </Box>

                <Box>
                  <Text
                    color={'black'}
                    fontWeight={'extrabold'}
                    fontSize={'2xl'}
                  >
                    {quiz.name}
                  </Text>
                </Box>
              </Flex>
            </VStack>
          </Link>
        );
      })}
    </>
  );
};

export default QuizzesList;
