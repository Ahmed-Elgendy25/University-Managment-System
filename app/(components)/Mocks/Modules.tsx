import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Box, Center } from 'native-base';
import { Link } from 'expo-router';
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,

    width: '100%',
    backgroundColor: '#fb8434',
    position: 'relative',
    overflow: 'hidden',
    padding: 10,
    // You can adjust shadowOffset, shadowOpacity, shadowRadius, and elevation according to your design requirements
  },
});
const Modules = ({ dataModules }: any) => {
  return (
    <>
      {dataModules.map((module: { id: number; name: string; href: string }) => (
        <Center p={2}>
          <Link
            push
            href={module.href}
            key={module.id}
            style={styles.container}
          >
            <Box
              backgroundColor={'#075798'}
              position={'absolute'}
              borderRadius={'3xl'}
              w={'full'}
              left={0}
              top={'0'}
              right={0}
              bottom={0}
              minH={'100%'}
              style={styles.container}
              overflow={'hidden'}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                  marginTop: 20,
                }}
              >
                {module.name}
              </Text>
            </Box>
          </Link>
        </Center>
      ))}
    </>
  );
};

export default Modules;

// Exam classroom attendance feedback
{
  /* <Center p={2}>
      <Box
        w={'full'}
        p={10}
        position={'relative'}
        overflow={'hidden'}
        borderRadius={'3xl'}
        backgroundColor={'#fb8434'}
        style={styles.container}
      >
        <Box
          backgroundColor={'#075798'}
          position={'absolute'}
          borderRadius={'3xl'}
          w={'full'}
          left={0}
          top={'0'}
          right={0}
          bottom={0}
          minH={'100%'}
          style={styles.container}
          overflow={'hidden'}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Poppins-Bold',
              marginTop: 20,
            }}
          ></Text>
        </Box>
      </Box>
    </Center> */
}
