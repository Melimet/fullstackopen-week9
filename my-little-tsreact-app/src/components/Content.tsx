import { Course } from '../types'

function Content({ courses }: { courses: Course[]}):JSX.Element{
  return (
    <ul>
      { courses.map((course) => 
      <li key={course.name}> {course.name} exercises:{course.exerciseCount}</li>)}
    </ul>
  )
}

export { Content }