import Head from 'next/head';

import NavBar from 'components/NavBar';
import Intro from 'components/Intro';
import GithubApi from 'components/GitHub/GithubApi';
import InstaApi from 'components/Insta/InstaApi';
import CoursesList from 'components/OnlineCourses/CoursesList';
import ContactForm from 'components/ContactForm';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>the-DevLab | Home</title>
      </Head>
      <NavBar />
      <Intro />
      <GithubApi />
      <InstaApi />
      <CoursesList />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
