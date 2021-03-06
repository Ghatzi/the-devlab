import Link from 'next/link';

const Intro = () => (
  <section className="intro-feature" id="intro">
    <h1>Welcome to the-DevLab</h1>
    <p className="mt-4 mb-4">
      Hello, my name is George Hatzi and I'm a Frontend developer from London.
    </p>

    <p className="mb-4">
      the-DevLab was developed as a place where I can showcase some of my work
      to recruiters and clients. During my time as a developer I have worked
      with many languages including PHP, ASP, JavaScript, jQuery, XSLT, CSS and
      more however currently I'm focused on developing using React, Next.js,
      SASS &amp; Node.js.
    </p>
    <p>
      Below you will find my GitHub repositories as well as the latest Instagram
      posts from #the_devlab and the Udemy courses I have completed or currently
      doing. Feel free to contact me using the form below, alternatively you can
      email me at {''}
      <Link href="mailto:contact@the-devlab.co.uk">
        <a title="Get in touch">contact@the-devlab.co.uk</a>
      </Link>
      .
    </p>
  </section>
);

export default Intro;
