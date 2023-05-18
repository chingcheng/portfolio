import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/matthewlmai/',
      name: 'Matthew Mai',
      test: "I had the pleasure of following Ching’s journey as a software engineer. Working alongside her in various tasks and projects, she honed her problem-solving skills by asking relevant questions and challenging herself to elevate the quality of code. Her innate curiosity has always inspired me and the entire team. What truly impressed me about Ching was her ability to embrace challenges with a positive mindset. She never shied away from difficult tasks and always approached them with enthusiasm and determination. This mindset not only fueled her own personal growth but also motivated those around her to push their limits and strive for their best work.",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/tracey-chung/',
      name: 'Tracey Chung',
      role: 'Fullstack Software Engineer',
      test: "I had the pleasure of being Ching’s teaching assistant during her time at Hack Reactor. Ching is an exceptional software engineer who has demonstrated a strong aptitude for software development and a passion for learning. During her time at Hack Reactor, she worked on a variety of projects and consistently demonstrated a willingness to take on new challenges and learn new technologies. She has strong oral and written communication skills and can effectively communicate technical designs and concepts. Ching is a self-motivated and positive team player who is always excited to try new things and share her ideas. She is always open to feedback and improvements and is a pleasure to work with. Overall, I highly recommend Ching as a software engineer. She has a bright future ahead of her and would be an asset to any software development team.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in//',
      name: 'Esther Kim',
      test: "Throughout our professional journey together, I had the privilege of witnessing Ching's brilliance as a software engineer.  Her meticulous problem-solving skills, coupled with an unwavering commitment to quality code, consistently elevated our projects to new heights. Moreover, Ching's exceptional ability to communicate complex concepts and foster a collaborative atmosphere truly made her the go-to person on our team. Without a doubt, I wholeheartedly recommend Ching for any software engineering role or challenge that lies ahead.",
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/dnam74/',
      name: 'Daniel Nam',
      test: "Working with Ching was an amazing experience. She was consistently able to communicate her ideas clearly and was a standout on any assignments our projects we worked on together. In addition, Ching is a quick learner and is very eager to tackle new concepts. I'm confident that she will find success in any environment that she is placed in and I'm excited for her future endeavors as a software engineer.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in//',
      name: 'Tyler Herman',
      test: "",
    },
  ];
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
