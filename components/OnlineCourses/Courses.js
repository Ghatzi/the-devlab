const Courses = ({
  image,
  name,
  description,
  category,
  hours,
  instructor,
  url,
  status
}) => (
  <li>
    <a href={url} title={name} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={name} />
    </a>

    <div className="course-details">
      <h4>{name}</h4>
      <p>
        Description:{' '}
        {description.length > 35
          ? description.substr(0, 35) + '...'
          : description}
      </p>
      <p>Category: {category}</p>
      <p>Duration: {hours}hrs</p>
      <p>Instructor: {instructor}</p>
    </div>

    <p className="status">
      Status:{' '}
      <span
        style={status === 'Completed' ? { color: 'red' } : { color: 'green' }}
      >
        {status}
      </span>
    </p>
  </li>
);

export default Courses;
