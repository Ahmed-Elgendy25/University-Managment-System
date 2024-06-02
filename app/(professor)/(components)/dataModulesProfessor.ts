import { DataModulesTyped } from './professor-types';

const dataModules: DataModulesTyped[] = [
  { id: 0, name: 'Exam', href: '/(professor)/QuizScreen/' },
  { id: 1, name: 'Classroom', href: '/(professor)/AssignmentScreen/' },
  { id: 2, name: 'Attendance', href: '/(professor)/Attendance/' },
  { id: 3, name: 'Feedback', href: '/(professor)/Feedback/' },
];

export default dataModules;
