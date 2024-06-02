import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
  View,
  Wrap,
} from 'native-base';
import React from 'react';

import { Formik } from 'formik';
// import { TextInput } from 'react-native-gesture-handler';
// import { Button } from 'react-native';
import { GestureResponderEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../(student)/(components)/Header';
interface FormValues {
  email: string;
  id: number;
  password: string;
  repassword: string;
}

const Signup: React.FunctionComponent = () => {
  const initialValues: FormValues = {
    email: '',
    id: 0,
    password: '',
    repassword: '',
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <Box>
          <Header />
          <Box>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <VStack space={3} alignItems={'center'} padding={5}>
                  <Box>
                    <Text ml={'0.9rem'} color={'#999999'}>
                      Email
                    </Text>
                    <Input
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      mx="3"
                      placeholder="id@o6u.edu.eg"
                      w="100%"
                      accessibilityLabel="Label for Email"
                    />
                  </Box>

                  <Box>
                    <Text ml={'0.9rem'} color={'#999999'}>
                      ID
                    </Text>
                    <Input
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      mx="3"
                      placeholder="Your ID"
                      w="100%"
                      accessibilityLabel="Label for ID"
                    />
                  </Box>

                  <Box>
                    <Text ml={'0.9rem'} color={'#999999'}>
                      Password
                    </Text>
                    <Input
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      mx="3"
                      placeholder="Password"
                      w="100%"
                      accessibilityLabel="Label for Password"
                    />
                  </Box>

                  <Box>
                    <Text ml={'0.9rem'} color={'#999999'}>
                      Confirm Password
                    </Text>
                    <Input
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      mx="3"
                      placeholder="rePassword"
                      w="100%"
                      accessibilityLabel="Label for rePassword"
                    />
                  </Box>

                  <Box w={'100%'}>
                    <Button
                      backgroundColor={'#F19A1A'}
                      mt={5}
                      onPress={(e: GestureResponderEvent) => handleSubmit()}
                    >
                      <Text color={'white'}>Submit</Text>
                    </Button>
                  </Box>
                </VStack>
              )}
            </Formik>
          </Box>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Signup;
