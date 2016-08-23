export function createCourse(course) {
  return {type: 'CREATE_COURSE', course}; // ES6 you can omit right hand side if it matches left. course:course == course
}
