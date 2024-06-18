import axios from 'axios';
import { quizDataTyped } from './type';

export const quizData: quizDataTyped[] = [
  {
    id: 1,
    title: 'Physics Quiz',
    date: '2024-06-15',
    details: {
      quizId: 1,
      studentId: 1,
      moduleId: 1,
      enroll: true,
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      instructorName: 'Dr. Smith',
      totalDuration: 60,
      totalScore: 100,
      submission: {
        finalGrade: 90,
        takenTime: 50,
        status: 'Submitted',
        submitAt: '10:50 AM',
      },
    },
  },
  {
    id: 2,
    title: 'History Final',
    date: '2024-06-30',
    details: {
      quizId: 2,
      studentId: 1,
      moduleId: 2,
      enroll: true,
      startTime: '3:00 PM',
      endTime: '4:00 PM',
      instructorName: 'Dr. Green',
      totalDuration: 60,
      totalScore: 100,
      submission: {
        finalGrade: 0,
        takenTime: 0,
        status: 'Missed',
        submitAt: '',
      },
    },
  },
  {
    id: 3,
    title: 'Final Exam',
    date: '2024-06-30',
    details: {
      quizId: 3,
      studentId: 1,
      moduleId: 3,
      enroll: true,
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      instructorName: 'Dr. Smith',
      totalDuration: 60,
      totalScore: 100,
      submission: {
        finalGrade: 100,
        takenTime: 30,
        status: 'Submitted',
        submitAt: '10:30 AM',
        },
    },
  },
  {
    id: 4,
    title: 'Biology Quiz',
    date: '2024-06-30',
    details: {
      quizId: 4,
      studentId: 1,
      moduleId: 4,
      enroll: true,
      startTime: '1:00 PM',
      endTime: '2:00 PM',
      instructorName: 'Dr. Brown',
      totalDuration: 60,
      totalScore: 100,
      submission: {
        finalGrade: 0,
        takenTime: 0,
        status: 'Pending',
        submitAt: '',
        },
        },
  },
  {
    id: 5,
    title: 'Chemistry Midterm',
    date: '2024-06-30',
    details: {
      quizId: 5,
      studentId: 1,
      moduleId: 5,
      enroll: true,
      startTime: '2:00 PM',
      endTime: '3:00 PM',
      instructorName: 'Dr. Lee',
      totalDuration: 60,
      totalScore: 100,
      submission: {
        finalGrade: 0,
        takenTime: 0,
        status: 'Pending',
        submitAt: '',
      },
    },
  },
  {
    id: 6,
    title: 'Midterm Math',
    date: '2024-06-10',
    details: {
      quizId: 6,
      studentId: 1,
      moduleId: 6,
      enroll: true,
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      instructorName: 'Dr. Smith',
      totalDuration: 60,
      totalScore: 100,
      submission: {
        finalGrade: 60,
        takenTime: 50,
        status: 'Submitted',
        submitAt: '10:50 AM',
      },
    },
  },
  {
    id: 7,
    title: 'Geography Quiz',
    date: '2024-06-5',
    details: {
      quizId: 7,
      studentId: 1,
      moduleId: 7,
      enroll: true,
      startTime: '4:00 PM',
      endTime: '5:00 PM',
      instructorName: 'Dr. White',
      totalDuration: 60,
      totalScore: 100,
      submission: {
        finalGrade: 0,
        takenTime: 0,
        status: 'Missed',
        submitAt: '',
      },
    },
  },
];









// // Define the API function to fetch quiz data
// export const fetchQuizData = async (): Promise<quizDataTyped[]> => {
//   try {
//     const response = await axios.get<quizDataTyped[]>('http://localhost:5000/Api/V0.1/courses/{courseId}/instructors/{instructorId}/quizzes/ViewQuizDetails');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching quiz data:', error);
//     throw error;
//   }
// };

// // Example usage of the fetchQuizData function
// fetchQuizData().then((quizData) => {
//   console.log('Fetched quiz data:', quizData);
//   quizData = quizData;
// }).catch((error) => {
//   console.error('Error:', error);
// });
