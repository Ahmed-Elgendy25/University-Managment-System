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
export type SessionTyped = {
  id: number;
  title: string;
  creationDate: string;
  room: string;
};

export interface LocationTyped {
  id: number;
  name: string;
  buildings: BuildingTyped[];
}

export interface BuildingTyped {
  id: number;
  name: string;
  rooms: RoomTyped[];
}

export interface RoomTyped {
  id: number;
  name: string;
}
export type LocationObject = {
  latitude: number | null;
  longitude: number | null;
  timeStamp: number;
};

export interface RatingItem {
  id: number;
  rating: number;
  feedback: string;
}
