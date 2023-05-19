import React from 'react';
import IMG1 from '../../assets/munch.png';
import IMG2 from '../../assets/swift2.png';
import IMG3 from '../../assets/conference_go.png';
import { FaGitlab } from 'react-icons/fa';
import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Munch',
      img: IMG1,
      description:
        'Munch is a social media platform dedicated to food reviews and recommendations. Munch allows users to share their dining experiences through photos and reviews of the restaurants they visit. ',
      technologies: 'FastAPI | React | JavaScript | Python | Bootstrap | CSS | Docker | PostgreSQL | CI/CD',
      link: 'https://munchbunch.gitlab.io/munch/',
      gitlab: 'https://gitlab.com/munchbunch/munch',
    },
    {
      id: 2,
      title: 'Swift',
      img: IMG2,
      description:
        'Swift is a web application for car dealerships to manage their inventory, service, and sales departments.',
      technologies: 'React | Django | JavaScript | Python | Bootstrap | PostgreSQL | Docker',
      gitlab: 'https://gitlab.com/mschingcheng/swift',
    },
    {
      id: 3,
      title: 'Conference Go',
      img: IMG3,
      description:
        'Conference Go is a web application to manage conferences and attendees with user authentication.',
      technologies: 'React | Django | JavaScript | Python | Bootstrap | HTML | CSS | Docker',
      gitlab: 'https://gitlab.com/mschingcheng/fearless-frontend',
    },
  ];

  return (
    <section id="portfolio">
      <h2>Projects</h2>

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
              {/* {pro.link ? (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Website
                </a>
              ) : null} */}
              <a
                href={pro.gitlab}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitLab
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
