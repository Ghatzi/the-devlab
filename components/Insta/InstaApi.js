import { useState, useEffect } from 'react';
import axios from 'axios';

import PostsList from 'components/Insta/PostsList';

const InstaApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}&limit=10`
        )
        .then(res => {
          setPosts(res.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchPosts();
  }, []);

  return (
    <section className="insta-feature" id="insta">
      <h2 className="positioning">Latest Instagram posts from #the_devlab</h2>
      <PostsList posts={posts} />
    </section>
  );
};

export default InstaApi;
