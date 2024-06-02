export type ExamsTyped = {
  id: number;
  name: string;
  date: string;
  duration: string;
};

export interface StudentExamProps {
  id: number;
  name: string;
  missed: boolean;
  passed: boolean;
  score: number | null;
}

export interface StudentAssignmentProps {
  id: number;
  name: string;
  submissionTime: string | null;
  late: boolean;
  missed: boolean;
  inTime: boolean;
}

export interface StudentExamProps_And_StudentAssignmentProps
  extends StudentExamProps,
    StudentAssignmentProps {}

export type DataModulesTyped = {
  id: number;
  name: string;
  href: string;
};
export interface AssignmentProps {
  id: number;
  title: string;
  finished: boolean;
}
