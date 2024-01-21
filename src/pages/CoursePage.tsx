import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useScrollTop from "@/hooks/useScrollTop";
import { useSingleCourseQuery } from "@/redux/api/baseApi";
import { TSyllabusItem } from "@/types/course.types";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseId } = useParams();

  const { data: course, isLoading, isError } = useSingleCourseQuery(courseId || "");

  useScrollTop();

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
  const {
    name,
    instructor,
    description,
    location,
    enrollmentStatus,
    prerequisites,
    syllabus,
    thumbnail,
    schedule,
    duration,
  } = course.data;

  return (
    <div className='container mx-auto py-10 space-y-10'>
      <h1 className='text-4xl font-bold'>{name}</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='md:grid-cols-2 lg:col-span-3 space-y-6'>
          <img src={thumbnail} alt='image' className='rounded-lg' />
          <div className='space-y-2'>
            <h4 className='text-2xl font-bold'>Description</h4>
            <p>{description}</p>
          </div>
          <div className='bg-red-200 p-4 font-bold text-red-500 rounded-lg'>
            <p>Schedule : {schedule}</p>
          </div>

          <div>
            <h3 className='text-2xl font-bold'>Prerequisite</h3>
            <div className='space-y-1'>
              {prerequisites.map((item: string) => (
                <div key={item} className='flex items-center gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20s'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M3.75 12H20.25'
                      stroke='#FF6636'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M13.5 5.25L20.25 12L13.5 18.75'
                      stroke='#FF6636'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-2'>
            <h4 className='text-2xl font-bold'>Syllabus</h4>
            <ul className='space-y-5'>
              {syllabus.map((item: TSyllabusItem) => (
                <li key={item.topic} className='p-4 bg-gray-200 rounded-lg relative'>
                  <span className='font-bold absolute top-2 right-2'>Week: {item.week}</span>
                  <p className='font-bold text-lg'>{item.topic}</p>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h1 className='text-4xl font-bold'></h1>
          <Card className='p-2'>
            <CardHeader>
              <CardTitle>Enroll Course</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <>
                <div className='flex items-center justify-between'>
                  <p className='font-bold'>Instructor:</p>
                  <p className="'text-gray-500'">{instructor}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='font-bold'>Course Duration:</p>
                  <p className='text-gray-500'>{duration}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='font-bold'>Enrollment Status:</p>
                  <p
                    className={`text-gray-500 ${
                      enrollmentStatus === "Open" ? "text-green-500" : "text-red-600"
                    }`}
                  >
                    {enrollmentStatus}
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='font-bold'>Location:</p>
                  <p className={`text-gray-500`}>{location}</p>
                </div>
              </>
            </CardContent>
            <CardFooter>
              <Button className='w-full'>Enroll Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
