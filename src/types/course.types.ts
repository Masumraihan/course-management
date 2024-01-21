export type TSyllabusItem = {
  _id: string;
  week: number;
  topic: string;
  content: string;
};

export type TStudentItem = {
  _id: string;
  id: number;
  name: string;
  email: string;
};

export type TCourseItem = {
  _id: string;
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: TSyllabusItem[];
  students: TStudentItem[];
};
