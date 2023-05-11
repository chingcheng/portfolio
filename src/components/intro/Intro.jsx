import React from 'react';
// import { FaAward } from 'react-icons/fa';
// import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div> */}
          <p>Hi, I'm Ching! I am a software engineer who is passionate about debugging code, user experience, and accessibility. My passion for software engineering stems from my teaching background in public education and experience in a technology focused school. I am currently raising a black lab puppy for Guide Dogs for the Blind, where my drive for accessibility comes from. When I'm not at my desk, I'm probably eating some good food, drinking boba, working on a Studio Ghibli puzzle, or hanging out with my puppy, Guava.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
