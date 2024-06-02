import { GestureResponderEvent, Pressable } from 'react-native';
import React from 'react';
import { Box, Button, Heading, Input, Text, VStack, Spacer } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { router } from 'expo-router';
interface FormValues {
  email: string;
}
const ForgetPassword: React.FunctionComponent = () => {
  const initialValues: FormValues = {
    email: '',
  };

  return (
    <Box marginY={'1/4'}>
      <SafeAreaView>
        <Box flexDir={'column'} mt={6} h={'1/2'} justifyContent={'center'}>
          <Heading size="2xl" my={5} textAlign={'center'}>
            Forget Password
          </Heading>

          <Heading
            size={'xs'}
            fontWeight={'normal'}
            textAlign={'center'}
            color={'#747373'}
          >
            if you’ve forgotten your account password, enter your email below
            and we will send you on email with instructions to reset your
            password.
          </Heading>
        </Box>

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

                <Button
                  my={'20px'}
                  w={'100%'}
                  backgroundColor={'#F19A1A'}
                  onPress={() => router.push('/OTP/')}
                >
                  <Text color={'white'}>Submit</Text>
                </Button>
              </VStack>
            )}
          </Formik>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default ForgetPassword;
