import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { QuestionTyped } from './type';
import { router } from 'expo-router';

interface Props {
  sampleQuestions: QuestionTyped[];
  setScore: React.Dispatch<React.SetStateAction<number | null>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionsComponent = ({
  sampleQuestions = [],
  setScore,
  timeLeft,
  setTimeLeft,
  submitted,
  setSubmitted,
}: Props) => {
  const [selectedOptionIndices, setSelectedOptionIndices] = useState<
    (string | string[] | null)[]
  >(new Array(sampleQuestions.length).fill(null));

  let [home, setHome] = useState(false);

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
      const calculatedScore = calculateScore();
      setScore(calculatedScore);
    }
  }, [submitted]);

  const handleOptionPress = (questionIndex: number, optionId: string) => {
    if (submitted || timeLeft === 0) return;
    setSelectedOptionIndices((prevState) => {
      const newState = [...prevState];
      newState[questionIndex] = optionId;
      return newState;
    });
  };

  const handleCheckboxPress = (questionIndex: number, optionId: string) => {
    if (submitted || timeLeft === 0) return;
    setSelectedOptionIndices((prevState) => {
      const newState = [...prevState];
      if (!Array.isArray(newState[questionIndex])) {
        newState[questionIndex] = [];
      }
      const optionIndex = (newState[questionIndex] as string[]).indexOf(
        optionId
      );
      if (optionIndex !== -1) {
        (newState[questionIndex] as string[]).splice(optionIndex, 1);
      } else {
        (newState[questionIndex] as string[]).push(optionId);
      }
      return newState;
    });
  };

  const calculateScore = () => {
    return sampleQuestions.reduce((correctAnswersCount, question, index) => {
      const userChoiceIds = selectedOptionIndices[index];
      if (userChoiceIds !== null) {
        if (Array.isArray(userChoiceIds)) {
          // For optional-choice questions
          const correctOptionIds = question.options.values
            .filter((option) => option.isCorrect)
            .map((option) => option.id);
          const isAllCorrectlySelected = correctOptionIds.every((optionId) =>
            userChoiceIds.includes(optionId)
          );
          const isAllIncorrectlySelected = userChoiceIds.every(
            (optionId) => !correctOptionIds.includes(optionId)
          );
          if (
            isAllCorrectlySelected &&
            userChoiceIds.length === correctOptionIds.length
          ) {
            correctAnswersCount++;
          }
        } else {
          // For multiple-choice questions
          if (
            question.options.values.find(
              (option) => option.id === userChoiceIds
            )?.isCorrect
          ) {
            correctAnswersCount++;
          }
        }
      }
      return correctAnswersCount;
    }, 0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setHome(true);
  };

  const renderQuestions = () => {
    return sampleQuestions.map((question, index) => (
      <View key={question.id} style={styles.questionContainer}>
        <Text style={styles.question}>{`Q${index + 1}: ${
          question.question
        }`}</Text>
        {question.imageLink && (
          <Image source={{ uri: question.imageLink }} style={styles.image} />
        )}
        {question.options.values.map((option) => (
          <View key={option.id} style={styles.option}>
            {question.type === 'multiple-choice' ? (
              <RadioButton
                value={option.id}
                status={
                  selectedOptionIndices[index] === option.id
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => handleOptionPress(index, option.id)}
                disabled={submitted || timeLeft === 0}
              />
            ) : question.type === 'optional-choice' ? (
              <Checkbox
                status={
                  (selectedOptionIndices[index] as string[])?.includes(
                    option.id
                  )
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => handleCheckboxPress(index, option.id)}
                disabled={submitted || timeLeft === 0}
              />
            ) : (
              <RadioButton
                value={option.id}
                status={
                  selectedOptionIndices[index] === option.id
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => handleOptionPress(index, option.id)}
                disabled={submitted || timeLeft === 0}
              />
            )}
            <Text style={styles.optionText}>{option.text}</Text>
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

      {home && (
        <TouchableOpacity
          onPress={() => {
            setHome(false);
            router.replace('/(student)/(tabs)/Home');
          }}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Go to Home</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};
export default QuestionsComponent;

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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});
