import React from 'react';
import { connect } from 'react-redux';

const CourseListPage = ({ courses }) => {
    return (
        courses.length === 0 ? (
            <div>
                <h1>Create Your First Course</h1>
            </div>
        ) : (
            <div>
                <ul>
                    {courses.map(course => (
                        <li key={course.id}>{course.name}</li>
                    ))}
                </ul>
            </div>
        )
    )
}

// Map State to Props
const mapState = state => ({
    courses: state.courses
})

export default connect(mapState)(CourseListPage)