import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Button, Input, Text, VStack } from 'native-base';
import { Formik } from 'formik';

interface FormValues {
  email: string;
  id: number;
  password: string;
  repassword: string;
}

const ResetPassword: React.FunctionComponent = () => {
  // root: { padding: 20, minHeight: 300 },

  const initialValues: FormValues = {
    email: '',
    id: 0,
    password: '',
    repassword: '',
  };
  return (
    <SafeAreaView>
      <Box flexBasis={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Text fontWeight={'bold'} textAlign={'center'} fontSize={'3xl'}>
          Enter New Password
        </Text>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <VStack space={3} w={'100%'} alignItems={'center'} padding={5}>
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

              <Button
                my={'20px'}
                w={'100%'}
                backgroundColor={'#F19A1A'}
                // onPress={(e: GestureResponderEvent) => handleSubmit()}
              >
                <Text color={'white'}>Submit</Text>
              </Button>
            </VStack>
          )}
        </Formik>
      </Box>
    </SafeAreaView>
  );
};

export default ResetPassword;
