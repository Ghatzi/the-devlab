import { useState, useEffect } from 'react';
import axios from 'axios';

import ReposList from 'components/GitHub/ReposList';

const GithubApi = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get(
          'https://api.github.com/users/Ghatzi/repos'
        );
        setRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section className="github-section" id="github">
      <h2 className="positioning">Explore my GitHub repositories</h2>
      <ReposList repos={repos} />
      <a
        href="https://github.com/Ghatzi?tab=repositories"
        target="_blank"
        title="View all my repositories on GitHub"
        rel="noopener noreferrer"
      >
        View all my repositories on GitHub
      </a>
    </section>
  );
};

export default GithubApi;
