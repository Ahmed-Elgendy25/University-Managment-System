// import date from 'date-and-time';
// const now = new Date();

import { ExamsTyped } from './type';

const ExamsList: ExamsTyped[] = [
  {
    id: 1,
    title: 'Mathematics Midterm Exam',
    date: '2024-06-15',
    startTime: '10:00 AM',
    duration: '2 hours',
    status: 'submitted',
    isActive: false,
  },
  {
    id: 2,
    title: 'Mathematics Final Exam',
    date: '2024-06-30',
    startTime: '10:00 AM',
    duration: '2 hours',
    status: 'submitted',
    isActive: false,
  },
  {
    id: 3,
    title: 'Physics Midterm Exam',
    date: '2024-06-15',
    startTime: '10:00 AM',
    duration: '2 hours',
    status: 'missed',
    isActive: false,
  },
  {
    id: 4,
    title: 'Physics Final Exam',
    date: '2024-06-30',
    startTime: '10:00 AM',
    duration: '2 hours',
    status: 'missed',
    isActive: false,
  },
  {
    id: 5,
    title: 'Chemistry Midterm Exam',
    date: '2024-06-15',
    startTime: '10:00 AM',
    duration: '2 hours',
    status: 'upcoming',
    isActive: false,
  },
  {
    id: 6,
    title: 'Chemistry Final Exam',
    date: '2024-06-30',
    startTime: '10:00 AM',
    duration: '2 hours',
    status: 'upcoming',
    isActive: true,
  },
  {
    id: 7,
    title: 'Biology Midterm Exam',
    date: '2024-06-15',
    startTime: '10:00 AM',
    duration: '2 hours',
    status: 'upcoming',
    isActive: false,
  },
  // Add more exams here
];

export default ExamsList;
