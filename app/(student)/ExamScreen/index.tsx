import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import QuestionsComponent from '../(components)/QuestionsComponent'; // Assuming the correct path to QuestionsScreen
import { useLocalSearchParams, useNavigation } from 'expo-router';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const QuizScreen = () => {
  // Sample questions data
  const sampleQuestions: Question[] = [
    {
      question: 'What is the capital of France?',
      options: ['lorem', 'Paris', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Stephen King', 'J.K. Rowling', 'Mark Twain'],
      answer: 'Harper Lee',
    },
    {
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
      answer: 'Mitochondria',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      answer: 'H2O',
    },
  ];

  const [totalDuration, setTotalDuration] = useState<number>(10); // Default duration of 10 minutes
  const [timeLeft, setTimeLeft] = useState<number>(totalDuration * 60); // Time left in seconds
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const navigation = useNavigation();

  const params = useLocalSearchParams<{ name: string }>();
  const { name } = params;
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name]);

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.title}>Quiz Title</Text>
        <Text style={styles.description}>
          Description of the quiz goes here.
        </Text>
        <Text
          style={styles.duration}
        >{`Duration: ${totalDuration} minute`}</Text>
        {/* Display time left and score */}
        <View style={styles.score}>
          <Text style={styles.scoreText}>
            {submitted
              ? 'Time Left: Finished'
              : `Time Left: ${Math.floor(timeLeft / 60)}:${(
                  '0' +
                  (timeLeft % 60)
                ).slice(-2)}`}
          </Text>
          <Text style={styles.scoreText}>
            {`Score: ${
              score !== null ? `${score}/${sampleQuestions.length}` : ''
            }`}
          </Text>
        </View>
      </View>
      {/* Questions component section */}
      <ScrollView contentContainerStyle={styles.form}>
        <QuestionsComponent
          sampleQuestions={sampleQuestions}
          duration={totalDuration}
          setScore={setScore}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  header: {
    paddingTop: 40,
    padding: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#F19A1A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFF',
  },
  duration: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFF',
  },
  form: {
    flexGrow: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreText: {
    color: 'white',
    width: 150,
  },
});

export default QuizScreen;

// import { Box, Heading, Radio, Text } from 'native-base';
// import React, { useEffect, useState } from 'react';
// import { mcqQuestions } from '../(components)/questions';
// import { router, useNavigation } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ScrollView } from 'react-native';
// // import QuestionsComponent from '../(components)/QuestionsComponent';
// import { Button } from 'react-native-paper';
// import QuestionsComponent from '../(components)/QuestionsComponent';
// import CountDown from 'react-native-countdown-component';

// const index = () => {
//   const navigation = useNavigation();
//   useEffect(() => {
//     navigation.setOptions({ headerShown: false });
//   }, [navigation]);

//   return (
//     <SafeAreaView>
//       <Box
//         w={'full'}
//         pt={10}
//         pb={2}
//         position={'absolute'}
//         left={0}
//         top={0}
//         zIndex={50}
//         bgColor={'#F19A1A'}
//       >
//         <CountDown
//           size={20}
//           until={10}
//           onFinish={() => alert('Finished')}
//           digitStyle={{
//             backgroundColor: '#FFF',
//           }}
//           digitTxtStyle={{ color: '#F19A1A' }}
//           timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
//           separatorStyle={{ color: '#F19A1A' }}
//           timeToShow={['H', 'M', 'S']}
//           timeLabels={{ m: '', s: '' }} // Provide valid values for the timeLabels prop
//           showSeparator
//         />
//       </Box>
//       <ScrollView
//         style={{
//           marginTop: 50,
//         }}
//       >
//         {mcqQuestions.map((question, i) => {
//           const { options } = question;
//           return (
//             <Box key={i} bgColor={'#F19A1A'}>
//               <Heading p={4} size={'xl'} color={'white'}>
//                 Q{i + 1}
//               </Heading>
//               <Box p={3} backgroundColor={'white'}>
//                 <Text fontWeight={'semibold'} fontSize={'2xl'} mb={2} p={3}>
//                   {question.question}
//                 </Text>
//                 <QuestionsComponent options={options} />
//               </Box>
//             </Box>
//           );
//         })}
//         <Button
//           textColor="white"
//           style={{ marginVertical: 10, padding: 5, backgroundColor: '#5f4bdf' }}
//           onPress={() => router.navigate('/')}
//         >
//           Submit
//         </Button>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default index;
