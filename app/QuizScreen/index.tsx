import React from 'react';
import { Box, Flex, Text } from 'native-base';
import QuizzesList from '../(components)/QuizzesList';
import ButtonComponent from '../(components)/ButtonComponent';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
const index = () => {
  return (
    <ScrollView>
      <Flex direction="row" p={5} justifyContent={'space-between'}>
        <ButtonComponent
          icon={<MaterialIcons name="upcoming" size={24} color="black" />}
          path="Incoming"
        >
          <Text>Incoming</Text>
        </ButtonComponent>
        <ButtonComponent
          icon={<FontAwesome name="send-o" size={24} color="black" />}
          path="Submit"
        >
          <Text>Submit</Text>
        </ButtonComponent>
        <ButtonComponent
          icon={<MaterialIcons name="call-missed" size={24} color="black" />}
          path="Missed"
        >
          <Text>Missed</Text>
        </ButtonComponent>
      </Flex>

      <QuizzesList />
    </ScrollView>
  );
};

export default index;
