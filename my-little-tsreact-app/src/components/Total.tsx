import { Course } from "../types"

function Total({ courses}: {courses: Course[]}){
  return (
    <p>
      Total number of exercises:
      { courses.reduce((sum, course) => sum + course.exerciseCount, 0)}
    </p>
  )
}

export { Total }