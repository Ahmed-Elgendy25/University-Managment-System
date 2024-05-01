import { Box, Heading, Radio, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { mcqQuestions } from '../(components)/questions';
import { router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
// import QuestionsComponent from '../(components)/QuestionsComponent';
import { Button } from 'react-native-paper';
import QuestionsComponent from '../(components)/QuestionsComponent';

const index = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Box
        w={'full'}
        p={7}
        position={'absolute'}
        left={0}
        top={0}
        zIndex={50}
        bgColor={'pink.400'}
      ></Box>
      <ScrollView
        style={{
          marginTop: 50,
        }}
      >
        {mcqQuestions.map((question, i) => {
          const { options } = question;
          return (
            <Box key={i} bgColor={'#F19A1A'}>
              <Heading p={3} size={'xl'} color={'white'}>
                Q{i + 1}
              </Heading>
              <Box p={3} backgroundColor={'white'}>
                <Text fontWeight={'semibold'} fontSize={'2xl'} mb={2} p={3}>
                  {question.question}
                </Text>
                <QuestionsComponent options={options} />
              </Box>
            </Box>
          );
        })}
        <Button
          textColor="white"
          style={{ marginVertical: 10, padding: 5, backgroundColor: '#5f4bdf' }}
          onPress={() => router.navigate('/')}
        >
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
