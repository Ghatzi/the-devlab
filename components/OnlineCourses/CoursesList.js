import CourseList from 'components/OnlineCourses/courses_db';
import Courses from 'components/OnlineCourses/Courses';

const CoursesList = () => (
  <section className="courses-feature" id="courses">
    <h2 className="positioning">Online Udemy courses</h2>
    <ul>
      {CourseList.sort((a, b) => (a.category > b.category ? 1 : -1)).map(
        data => (
          <Courses
            key={data.id}
            name={data.name}
            description={data.description}
            image={data.image}
            category={data.category}
            hours={data.hours}
            instructor={data.instructor}
            url={data.url}
            status={data.status}
          />
        )
      )}
    </ul>
  </section>
);

export default CoursesList;
