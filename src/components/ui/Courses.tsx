import { useAllCourseQuery } from "@/redux/api/baseApi";
import { TCourseItem } from "@/types/course.types";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

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
          <div key={course.name}>
            <Card className='shadow-xl'>
              <CardHeader className='max-h-[200px] rounded-lg overflow-hidden mb-4'>
                <img src={course.thumbnail} alt={course.name} className='rounded-lg' />
              </CardHeader>
              <CardContent className='grid space-y-1'>
                <CardTitle className='lg:text-xl'>{course.name}</CardTitle>
                <CardDescription className='line-clamp-2'>{course.description}</CardDescription>
                <div className='font-semibold'>instructor: {course.instructor}</div>
              </CardContent>
              <CardFooter className='gap-3'>
                <Link to={`/${course._id}`} className='w-full'>
                  <Button className='w-full'>View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
