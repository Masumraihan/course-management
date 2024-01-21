import { useAllCourseQuery } from "@/redux/api/baseApi";
import { TCourseItem } from "@/types/course.types";
import Loader from "./Loader";

import CourseCard from "./CourseCard";

const Courses = () => {
  const { data: courses, isLoading, isError } = useAllCourseQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className='h-[calc(100vh-56px)] flex items-center justify-center'>
        <h1 className='text-6xl text-red-500 text-center'>Something went wrong !</h1>
      </div>
    );
  }

  return (
    <div className='container mx-auto space-y-3'>
      <h1 className='text-4xl font-bold'>Our Courses</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {courses.data.map((course: TCourseItem) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
