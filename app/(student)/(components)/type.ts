export type DataModulesTyped = {
  id: number;
  name: string;
  href: string;
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

export type quizDataTyped = {
  id: number;
  title: string;
  date: string;
  details: {
    quizId: number;
    studentId: number;
    moduleId: number;
    enroll: boolean;
    startTime: string;
    endTime: string;
    instructorName: string;
    totalDuration: number;
    totalScore: number;
    submission: {
      finalGrade: number;
      takenTime: number;
      status: string;
      submitAt: string;
    };
  };
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
  Time: string;
  startTime: string;
  duration: string;
  status: string;
  isActive: boolean;
};

export type SessionsTyped = {
  id: number;
  title: string;
  Time: string;
  duration: string;
  status: string;
};

export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export type LocationObject = {
  latitude: number | null;
  longitude: number | null;
  timeStamp: number;
};
