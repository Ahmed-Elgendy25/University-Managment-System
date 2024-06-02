import { View, Text } from 'react-native';
import React from 'react';
import {
  Center,
  Heading,
  Image,
  NativeBaseProvider,
  VStack,
  theme,
} from 'native-base';

const logo = require('../../../assets/logo.png');

const Header = () => {
  return (
    <View>
      <VStack>
        <Center>
          <Image source={logo} alt="Alternate Text" size="xl" mt={0} />
        </Center>
        <Heading size="lg" textAlign={'center'} padding={5}>
          <Text>All-in-One</Text> {'\n'}
          <Text>Student Academic</Text>
        </Heading>
      </VStack>
    </View>
  );
};

export default Header;
