import { QuizzesListTyped } from './type';
import date from 'date-and-time';
const now = new Date();

export const quizzList: QuizzesListTyped[] = [
  {
    name: 'Maths-II',
    date: {
      startDate: new Date(date.format(now, 'YYYY/MM/DD')),
      startTime: new Date(date.format(now, 'hh:mm A')),
      endDate: new Date(date.addDays(now, 4)),
      endTime: new Date(date.format(new Date('11:14 PM'), 'hh:mm A')),
    },
    quizGrade: 50,
  },
];
