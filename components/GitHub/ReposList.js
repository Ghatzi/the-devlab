import Repos from 'components/GitHub/Repos';

const ReposList = ({ repos }) => (
  <ul>
    {repos.map(data => (
      <Repos
        key={data.id}
        name={data.name}
        description={data.description}
        html_url={data.html_url}
        has_pages={data.has_pages}
        homepage={data.homepage}
      ></Repos>
    ))}
  </ul>
);

export default ReposList;
