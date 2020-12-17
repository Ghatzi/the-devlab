const CourseList = [
  {
    id: 1,
    name: 'MERN Stack React Node Ecommerce from Scratch to Deployment',
    image: '/img/mern-stack-ecommerce.jpg',
    description:
      'MERN Stack React Node MongoDB powered E-Commerce App with PayPal and Credit Card Payment along with Admin Dashboard.',
    category: 'MERN',
    hours: 16.5,
    instructor: 'Ryan Dhungel',
    url: 'https://www.udemy.com/course/react-node-ecommerce/',
    status: 'Completed'
  },
  {
    id: 2,
    name: 'Complete Next.js with React & Node - Beautiful Portfolio App',
    image: '/img/nextjs-portfolio.jpg',
    description:
      'Build Serverless Web Apps with Next.js. Learn Hooks. Deploy to Vercel. Next.js (Next 9.4), React (React 16+) & Node.',
    category: 'NextJS',
    hours: 60,
    instructor: 'Filip Jerga',
    url:
      'https://www.udemy.com/course/awesome-nextjs-with-react-and-node-amazing-portfolio-app/',
    status: 'Incomplete'
  },
  {
    id: 3,
    name: 'Next.JS with Sanity CMS - Serverless Blog App (w/ Vercel)',
    image: '/img/nextjs-sanity-blog.jpg',
    description:
      'Build your own Blog App with the latest Next.JS & React(Next 9.4+, React hooks). Learn how to use headless Sanity CMS.',
    category: 'NextJS',
    hours: 12.5,
    instructor: 'Filip Jerga',
    url:
      'https://www.udemy.com/course/nextjs-with-sanity-cms-serverless-blog-app-w-vercel/',
    status: 'Completed'
  },
  {
    id: 4,
    name: 'MERN Stack Web Development with Ultimate Authentication',
    image: '/img/mern-stack-authentication.jpg',
    description:
      'Build Ultimate Authentication Boilerplate Project with MERN Stack from Scratch to Digital Ocean Cloud Servers.',
    category: 'MERN',
    hours: 10,
    instructor: 'Ryan Dhungel',
    url: 'https://www.udemy.com/course/mern-stack/',
    status: 'Completed'
  },
  {
    id: 5,
    name: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
    image: '/img/javascript.jpg',
    description:
      'Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2020.',
    category: 'JavaScript',
    hours: 52.5,
    instructor: 'Maximilian Schwarzmüller',
    url:
      'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
    status: 'Incomplete'
  },
  {
    id: 6,
    name: 'MERN eCommerce From Scratch',
    image: '/img/mern-stack-proshop.jpg',
    description:
      'Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB.',
    category: 'MERN',
    hours: 15,
    instructor: 'Brad Traversy',
    url: 'https://www.udemy.com/course/mern-ecommerce/',
    status: 'Completed'
  },
  {
    id: 7,
    name: 'Git & GitHub Crash Course: Create a Repository From Scratch!',
    image: '/img/github.jpg',
    description:
      'Learn how to create a Git repository, clone it, make changes, and submit changes to GitHub in less than 30 minutes.',
    category: 'GIT',
    hours: 0.5,
    instructor: 'Kalob Taulien',
    url:
      'https://www.udemy.com/course/git-and-github-crash-course-creating-a-repository-from-scratch/',
    status: 'Completed'
  },
  {
    id: 8,
    name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
    image: '/img/advanced-sass.jpg',
    description:
      'The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.',
    category: 'SASS',
    hours: 28,
    instructor: 'Jonas Schmedtmann',
    url: 'https://www.udemy.com/course/advanced-css-and-sass/',
    status: 'Completed'
  },
  {
    id: 9,
    name: 'React Hooks and Context (with React-Redux migration guide)',
    image: '/img/react-hooks.jpg',
    description:
      'Learn the future of React and how to migrate your existing Redux code.',
    category: 'React',
    hours: 1,
    instructor: 'Mohammad Iqbal',
    url: 'https://www.udemy.com/course/react-hooks-with-react-redux-migration/',
    status: 'Completed'
  },
  {
    id: 10,
    name: 'Node JS API Development for Beginners',
    image: '/img/node-api.jpg',
    description:
      'Learn Node JS API Development from absolute scratch. This course is for complete beginners getting started guide!',
    category: 'NodeJS',
    hours: 3,
    instructor: 'Ryan Dhungel',
    url: 'https://www.udemy.com/course/node-js-api-tutorial/',
    status: 'Completed'
  },
  {
    id: 11,
    name: 'React JS Frontend Web Development for Beginners',
    image: '/img/react.jpg',
    description:
      'Learn React JS along with Modern JavaScript from absolute scratch. This course is a getting started guide for beginners.',
    category: 'React',
    hours: 3,
    instructor: 'Ryan Dhungel',
    url: 'https://www.udemy.com/course/react-tutorial/',
    status: 'Completed'
  },
  {
    id: 12,
    name: 'The Complete Web Developer Course 2.0',
    image: '/img/complete-web-developer.jpg',
    description:
      'Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!',
    category: 'Web-Development',
    hours: 30.5,
    instructor: 'Rob Percival',
    url: 'https://www.udemy.com/course/the-complete-web-developer-course-2/',
    status: 'Completed'
  },
  {
    id: 13,
    name: 'npm - Mastering the Basics',
    image: '/img/npm.jpg',
    description:
      'Get a strong understanding on npm commands and be able to make use of npm for Angular, Node and similar technologies.',
    category: 'NPM',
    hours: 0.5,
    instructor: 'Vishwas Gopinath',
    url: 'https://www.udemy.com/course/npm-mastering-the-basics/',
    status: 'Completed'
  },
  {
    id: 14,
    name: 'Next JS with React Hooks - Building SSR React Applications',
    image: '/img/nextjs-hooks.jpg',
    description:
      'Get up and running with React Hooks and Next Js in a Day. Learn to build Server Side Rendered (SSR) React applications.',
    category: 'NextJS',
    hours: 2,
    instructor: 'Ryan Dhungel',
    url: 'https://www.udemy.com/course/next-js-react-hooks/',
    status: 'Completed'
  },
  {
    id: 15,
    name: 'Introduction to TypeScript',
    image: '/img/typescript.jpg',
    description:
      'Learn to supercharge your web-applications with the powerful typed language from Microsoft!',
    category: 'TypeScript',
    hours: 1,
    instructor: 'Daniel Stern',
    url: 'https://www.udemy.com/course/typescript/',
    status: 'Completed'
  },
  {
    id: 16,
    name: 'Sending Mail in PHP using PHP MAILER',
    image: '/img/mail-in-php.jpg',
    description: 'Send Mail in PHP using PHP Mailer.',
    category: 'PHP',
    hours: 1.5,
    instructor: 'Peterson Fredrick',
    url: 'https://www.udemy.com/course/sending-mail-in-php-using-php-mailer/',
    status: 'Completed'
  },
  {
    id: 17,
    name: 'Sass Workflow',
    image: '/img/sass-workflow.jpg',
    description:
      'Learn why Sass is becoming more prominent in web development and how to use the API and command line for Sass.',
    category: 'SASS',
    hours: 3,
    instructor: 'Lawrence Turton',
    url: 'https://www.udemy.com/course/sass-workflow/',
    status: 'Completed'
  },
  {
    id: 18,
    name: 'CSS Flexbox - Mastering the Basics',
    image: '/img/flexbox.jpg',
    description: 'CSS Flexbox - Mastering the Basics.',
    category: 'Flexbox',
    hours: 1.2,
    instructor: 'Vishwas Gopinath',
    url: 'https://www.udemy.com/course/css-flexbox-mastering-the-basics/',
    status: 'Completed'
  },
  {
    id: 19,
    name: 'EMMET Faster HTML & CSS workflow - Best Tool For Developers',
    image: '/img/emmet.jpg',
    description:
      'Emmet is plugin for text editors that helps you write HTML and CSS faster. Work quicker saving time & making more money.',
    category: 'Emmet',
    hours: 1.1,
    instructor: 'Edwin Diaz',
    url:
      'https://www.udemy.com/course/emmet-start-coding-html-and-css-fast-and-easy/',
    status: 'Completed'
  },
  {
    id: 20,
    name: 'Practical PHP: Master the Basics and Code Dynamic Websites',
    image: '/img/practical-php.jpg',
    description:
      'Code Your Very Own Dynamic Websites by Learning PHP Through Real-World Application & Examples.',
    category: 'PHP',
    hours: 6.2,
    instructor: 'Brad Hussey',
    url: 'https://www.udemy.com/course/code-dynamic-websites/',
    status: 'Completed'
  }
];

export default CourseList;
