import React from 'react';
import IMG2 from '../../assets/swift2.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Munch',
      img: IMG2,
      description:
        'Munch is a social media platform dedicated to food reviews and recommendations. Munch allows users to share their dining experiences through photos and reviews of the restaurants they visit. ',
      technologies: 'FastAPI | React.js | PostgreSQL | Python | Bootstrap | CSS',
      link: 'https://munchbunch.gitlab.io/munch/',
      gitlab: 'https://gitlab.com/munchbunch/munch',
    },
    {
      id: 2,
      title: 'Swift',
      img: IMG2,
      description:
        'Swift is an web application for car dealerships to manage their inventory, service, and sales departments.',
      technologies: 'Django | React | Docker ',
      github: '',
    },
    {
      id: 3,
      title: 'Puppy Tracker',
      img: IMG2,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'Django | Python | HTML | CSS',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      gitlab: 'https://github.com/Meri-MG/shelter',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.gitlab}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitLab
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
