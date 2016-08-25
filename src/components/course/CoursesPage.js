import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }


  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props; //Optional, if you leave it out then below where CourseList is used you will need to say courses={this.props.courses}
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToTrops(state, ownProps) {
  return {
    courses: state.courses // This is defined in the rootReducer as courses.
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToTrops, mapDispatchToProps)(CoursesPage);
