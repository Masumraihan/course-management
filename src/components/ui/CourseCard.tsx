import { TCourseItem } from "@/types/course.types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Link } from "react-router-dom";
import { Button } from "./button";

const CourseCard = ({ course }: { course: TCourseItem }) => {
  return (
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
  );
};

export default CourseCard;
