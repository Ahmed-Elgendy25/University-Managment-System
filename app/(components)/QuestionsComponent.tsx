import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Props {
  sampleQuestions?: Question[];
  duration?: number;
  setScore: React.Dispatch<React.SetStateAction<number | null>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionsComponent: React.FC<Props> = ({
  sampleQuestions = [],
  duration = 0,
  setScore,
  timeLeft,
  setTimeLeft,
  submitted,
  setSubmitted,
}) => {
  const [selectedOptionIndices, setSelectedOptionIndices] = useState<number[]>(
    new Array(sampleQuestions.length).fill(null)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          handleSubmit();
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (submitted) {
      const calculatedScore = calculateDegree();
      setScore(calculatedScore);
    }
  }, [submitted]);

  const handleOptionPress = (questionIndex: number, optionIndex: number) => {
    if (submitted || timeLeft === 0) return;
    const newSelectedOptionIndices = [...selectedOptionIndices];
    newSelectedOptionIndices[questionIndex] = optionIndex;
    setSelectedOptionIndices(newSelectedOptionIndices);
  };

  const calculateDegree = () => {
    return sampleQuestions.reduce((correctAnswersCount, question, index) => {
      const userChoiceIndex = selectedOptionIndices[index];
      if (
        userChoiceIndex !== null &&
        question.answer === question.options[userChoiceIndex]
      ) {
        correctAnswersCount++;
      }
      return correctAnswersCount;
    }, 0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const renderQuestions = () => {
    return sampleQuestions.map((question, index) => (
      <View key={index} style={styles.questionContainer}>
        <Text style={styles.question}>{`Q${index + 1}: ${
          question.question
        }`}</Text>
        {question.options.map((option, optionIndex) => (
          <View key={optionIndex} style={styles.option}>
            <RadioButton
              value={String(optionIndex)}
              status={
                selectedOptionIndices[index] === optionIndex
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => handleOptionPress(index, optionIndex)}
              disabled={submitted || timeLeft === 0}
            />
            <Text style={styles.optionText}>{option}</Text>
          </View>
        ))}
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderQuestions()}
      {!submitted && (
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 15,
  },
  optionText: {
    width: '100%',
    fontSize: 16,
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#F19A1A',
    width: '65%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    margin: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuestionsComponent;

// import React, { useState } from 'react';
// import { RadioButton } from 'react-native-paper';
// import { OptionsTyped } from './type';

// const QuestionsComponent = ({ options }: { options: OptionsTyped }) => {
//   const [selectedValue, setSelectedValue] = useState<string | undefined>(
//     undefined
//   );

//   const handleValueChange = (value: any) => {
//     setSelectedValue(value);
//   };

//   return (
//     <>
//       {options.map((option, index) => {
//         return (
//           <RadioButton.Group
//             value={selectedValue}
//             onValueChange={handleValueChange}
//             name="myRadioGroup"
//             accessibilityLabel="Pick your Answer"
//             key={index}
//           >
//             <RadioButton.Item value={option} label={option} />
//           </RadioButton.Group>
//         );
//       })}
//     </>
//   );
// };

// export default QuestionsComponent;
