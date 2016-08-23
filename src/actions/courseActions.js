import * as types from './actionTypes';
export function createCourse(course) {
  return {type: types.CREATE_COURSE, course}; // ES6 you can omit right hand side if it matches left. course:course == course
}
