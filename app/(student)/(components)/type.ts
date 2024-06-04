export type DataModulesTyped = {
  id: number;
  name: string;
  href: string;
};

export type QuizzesListTyped = {
  name: string;
  startDate: string;
  startTime: string;
  quizGrade: number;
};
type QuestionType = 'multiple-choice' | 'true-false';

export type QuestionsMcqTyped = {
  type: QuestionType;
  question: string;
  imageLink?: string;
  points: number;
  duration: number;
  id: number;
  options: {
    id: string;
    values: {
      id: number;
      text: string;
      isCorrect: boolean;
    }[];
  };
};

export type quizDetailsTyped = {
  desc?: string | null;
  startDate: string;
  endDate: string;
  instructorName: string;
  totalDuration: number;
  totalScore: number;
  totalQuestions: number;
};
export type LocationObject = {
  latitude: number | null;
  longitude: number | null;
  timeStamp: number;
};

export interface QuestionTyped {
  id: number;
  type: string;
  question: string;
  imageLink?: string | null;
  options: {
    values: { id: string; text: string; isCorrect: boolean }[];
  };
}
export type ExamsTyped = {
  id: number;
  title: string;
  date: string;
  startTime: string;
  duration: string;
  status: string;
  isActive: boolean;
};
