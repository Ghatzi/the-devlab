const Posts = ({ permalink, media_url, caption }) => (
  <li>
    <a
      href={permalink}
      target="_blank"
      title="View this post on Instagram"
      rel="noopener noreferrer"
    >
      <img src={media_url} alt={media_url} />
    </a>
    <p className="mt-4 mb-4">{caption.substring(0, 100)}...</p>
    <a
      href={permalink}
      target="_blank"
      title="View this post on Instagram"
      rel="noopener noreferrer"
      className="btn btn--pink"
    >
      View Post
    </a>
  </li>
);

export default Posts;
