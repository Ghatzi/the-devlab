import Posts from 'components/Insta/Posts';

const PostsList = ({ posts }) => (
  <ul>
    {posts.map(data => (
      <Posts
        key={data.id}
        permalink={data.permalink}
        media_url={data.media_url}
        caption={data.caption}
      ></Posts>
    ))}
  </ul>
);

export default PostsList;
