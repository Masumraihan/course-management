import { TCourseItem } from "@/types/course.types";
import { createSlice } from "@reduxjs/toolkit/react";

const initialState: TCourseItem = {
  _id: "",
  id: 0,
  name: "",
  instructor: "",
  description: "",
  duration: "",
  enrollmentStatus: "",
  location: "",
  prerequisites: [],
  schedule: "",
  students: [],
  syllabus: [],
  thumbnail: "",
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
});

export default courseSlice;
