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
// import { Button } from 'react-native';
import { GestureResponderEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import Header from './(components)/Header';

// const logo = require('../assets/logo.png');

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

                  <Box w={'100%'}>
                    <Button
                      backgroundColor={'#F19A1A'}
                      mt={3}
                      // onPress={(e: GestureResponderEvent) => handleSubmit()}
                      onPress={() => router.replace('/Home')}
                    >
                      <Text color={'white'} fontSize={'md'} fontWeight={'bold'}>
                        SIGN IN
                      </Text>
                    </Button>
                  </Box>

                  <Center>
                    <Text
                      ml={'1rem'}
                      mt={2}
                      fontWeight={'bold'}
                      fontSize={'xs'}
                      color={'#767575'}
                    >
                      Don't Have an account,
                      <Link href={'/signup/'}>
                        <Text color={'#F19A1A'}>Sign up</Text>
                      </Link>
                    </Text>
                    <Text
                      ml={'1rem'}
                      mt={2}
                      fontWeight={'bold'}
                      fontSize={'xs'}
                      color={'#767575'}
                    >
                      <Link href={'/ForgetPassword/'}>Forget Password?</Link>
                    </Text>
                  </Center>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 960,
//     marginHorizontal: 'auto',
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 36,
//     color: '#38434D',
//   },
// });

{
  /* <View>
<View>
  <Text>Go to signup</Text>
  <Link
    href={'/signup'}
    style={{
      backgroundColor: 'red',
      width: '50%',
      marginHorizontal: 'auto',
    }}
  >
    Signup
  </Link>
</View>
</View> */
}
