import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header>
        <h1>Welcome to iLearn</h1>
        <nav>
          <a href="/signup">Sign Up</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <section className="hero">
        <h2>Learn Anything, Anytime, Anywhere</h2>
        <p>Join our community and start your learning journey today!</p>
        <button onClick={() => window.location.href='/signup'}>Get Started</button>
      </section>
      <section className="features">
        <h3>Our Features</h3>
        <ul>
          <li>Interactive Courses</li>
          <li>Expert Instructors</li>
          <li>Flexible Learning</li>
        </ul>
      </section>
      <section className="testimonials">
        <h3>What Our Users Say</h3>
        <blockquote>
          "iLearn has transformed the way I learn new skills. Highly recommend!"
        </blockquote>
        <cite>- Happy Learner</cite>
      </section>
      <footer>
        <p>© 2024 iLearn. All rights reserved.</p>
        <nav>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
