export type DataModulesTyped = {
  id: number;
  name: string;
  href: string;
};

export type QuizzesListTyped = {
  name: string;
  date: {
    startDate: Date;
    startTime: Date;
    endDate: Date;
    endTime: Date;
  };
  quizGrade: number;
};

export type QuestionsMcqTyped = {
  question: string;
  options: string[];
  answer: string;
};

export type OptionsTyped = string[];
