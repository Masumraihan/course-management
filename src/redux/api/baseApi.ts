import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://course-review-project-pi.vercel.app/api" }),
  tagTypes: ["course"],
  endpoints: (builder) => ({
    allCourse: builder.query({
      query: () => ({
        url: "/classes",
        method: "GET",
      }),
      providesTags: ["course"],
    }),
    singleCourse: builder.query({
      query: (courseId: string) => ({
        url: `/classes/${courseId}`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),
  }),
});

export const { useAllCourseQuery, useSingleCourseQuery } = courseApi;

export default courseApi;
