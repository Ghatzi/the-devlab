const Repos = ({ name, description, html_url, has_pages, homepage }) => (
  <li>
    <h3>{name}</h3>
    {description ? <p>{description}</p> : ''}
    <a
      target="_blank"
      title={`View ${name} repository on GitHub`}
      rel="noopener noreferrer"
      href={html_url}
    >
      View repository
    </a>
    {has_pages ? (
      <>
        <span>&nbsp;&nbsp;</span>
        <a
          target="_blank"
          title={`View ${name} on GitHub pages`}
          rel="noopener noreferrer"
          href={`https://ghatzi.github.io/${name}`}
        >
          View on GitHub pages
        </a>
      </>
    ) : homepage ? (
      <>
        <span>&nbsp;&nbsp;</span>
        <a
          target="_blank"
          title={`View ${name} on ${
            homepage.includes('vercel') ? 'Vercel' : 'Heroku'
          }`}
          rel="noopener noreferrer"
          href={homepage}
        >
          View on {homepage.includes('vercel') ? 'Vercel' : 'Heroku'}
        </a>
      </>
    ) : (
      ''
    )}
  </li>
);

export default Repos;
