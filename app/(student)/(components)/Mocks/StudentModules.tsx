import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Flex } from 'native-base';
import dataModules from './dataModules';

const modules = dataModules;

const StudentModules = () => {
  return (
    <>
      {modules.map((module: { id: number; name: string; href: string }) => {
        return (
          <Link
            href={module.href}
            key={module.id}
            style={styles.moduleItem}
            asChild
          >
            <Pressable>
              <Flex
                direction="row"
                alignItems={'center'}
                justifyContent={'center'}
                h={'full'}
                w={'full'}
              >
                <Text style={styles.moduleText}>{module.name}</Text>
              </Flex>
            </Pressable>
          </Link>
        );
      })}
    </>
  );
};

export default StudentModules;

const styles = StyleSheet.create({
  moduleItem: {
    width: '47%',

    height: 150,
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F19A1A',
  },
  moduleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

// import { View, StyleSheet, Text } from 'react-native';
// import React from 'react';
// import { Box, Center } from 'native-base';
// import { Link } from 'expo-router';
// const styles = StyleSheet.create({
//   container: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 3.84,
//     elevation: 5,

//     width: '100%',
//     backgroundColor: '#fb8434',
//     position: 'relative',
//     overflow: 'hidden',
//     padding: 10,
//     // You can adjust shadowOffset, shadowOpacity, shadowRadius, and elevation according to your design requirements
//   },
// });
// const Modules = ({ dataModules }: any) => {
//   return (
//     <>
//       {dataModules.map((module: { id: number; name: string; href: string }) => (
//         <Center p={2}>
//           <Link
//             push
//             href={module.href}
//             key={module.id}
//             style={styles.container}
//           >
//             <Box
//               backgroundColor={'#075798'}
//               position={'absolute'}
//               borderRadius={'3xl'}
//               w={'full'}
//               left={0}
//               top={'0'}
//               right={0}
//               bottom={0}
//               minH={'100%'}
//               style={styles.container}
//               overflow={'hidden'}
//             >
//               <Text
//                 style={{
//                   color: 'white',
//                   fontSize: 25,
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                   fontFamily: 'Poppins-Bold',
//                   marginTop: 20,
//                 }}
//               >
//                 {module.name}
//               </Text>
//             </Box>
//           </Link>
//         </Center>
//       ))}
//     </>
//   );
// };

// export default Modules;

// // Exam classroom attendance feedback
// {
//   /* <Center p={2}>
//       <Box
//         w={'full'}
//         p={10}
//         position={'relative'}
//         overflow={'hidden'}
//         borderRadius={'3xl'}
//         backgroundColor={'#fb8434'}
//         style={styles.container}
//       >
//         <Box
//           backgroundColor={'#075798'}
//           position={'absolute'}
//           borderRadius={'3xl'}
//           w={'full'}
//           left={0}
//           top={'0'}
//           right={0}
//           bottom={0}
//           minH={'100%'}
//           style={styles.container}
//           overflow={'hidden'}
//         >
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 25,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               fontFamily: 'Poppins-Bold',
//               marginTop: 20,
//             }}
//           ></Text>
//         </Box>
//       </Box>
//     </Center> */
// }
