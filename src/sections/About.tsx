import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { colors, mediaQueries } from '../config';

import aboutHero from '../images/undraw_dev_productivity.webp';
import Range from '../components/Range';
import SubHeader from '../components/SubHeader';
import Aside from '../components/Aside';

interface Props {
  className?: string;
}

function About(props: Props) {
  const { className } = props;

  useEffect(() => {
    gsap.from('.about__hero', {
      scrollTrigger: {
        trigger: '.about__hero',
        toggleActions: 'play pause resume complete',
      },
      duration: 1.5,
      ease: 'circ',
      opacity: 0,
    });
  }, []);

  return (
    <Section id='about' className={className}>
      <Aside></Aside>

      <main className='about__main'>
        <div className='about__maindiv1'>
          <div className='about__frame1'></div>
          <div className='about__frame2'></div>
          <img src={aboutHero} alt='about_hero' className='about__hero' />
        </div>

        <div className='about__maindiv2'>
          <SubHeader name='About' caption='Why Hire Me?' />

          <Range skill='JavaScript' value={85} />
          <Range skill='ReactJS (with Redux...)' value={83} />
          <Range skill='NodeJS (with Express...)' value={78} />
          <Range skill='HTML5/CSS3' value={82} />
          <Range skill='Web Hosting/Backend' value={80} />
          <Range skill='Web Animation' value={75} />
        </div>
      </main>

      <Aside></Aside>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  background: ${colors.coolGray};
  min-height: 100vh;
  min-width: 405px;

  .about__main {
    flex-basis: 90%;
    display: flex;
    justify-content: space-between;
  }
  .about__maindiv1 {
    position: relative;
    display: flex;
    justify-content: center;
    width: 400px;
    height: 500px;
    margin-bottom: 20px; // for media query match
  }
  .about__frame1 {
    position: absolute;
    bottom: 0;
    border: 14px solid ${colors.navyblueDark};
    border-top: none;
    width: 350px;
    height: 305px;
  }
  .about__frame2 {
    position: absolute;
    bottom: 0;
    height: 350px;
    width: 364px;
    border: none;
    border-top: 14px solid ${colors.navyblueDark};
    border-left: 14px solid ${colors.navyblueDark};
    transform: skewY(10deg);
  }
  .about__hero {
    position: absolute;
    top: 20px;
    width: 400px;
    height: 500px;
  }
  .about__maindiv2 {
    flex-basis: 50%;
  }

  @media only screen and (${mediaQueries.query1}) {
    .about__main {
      flex-direction: column;
      align-items: center;
    }
    .about__maindiv2,
    .about__maindiv1 {
      width: 100%;
    }

    .about__maindiv1 {
      justify-content: center;
    }
    .about__frame1,
    .about__frame2 {
      bottom: 40px;
    }
    .about__hero {
      top: -15px;
    }
  }

  @media only screen and (max-width: 400px) {
    .about__frame1 {
      width: 300px;
      height: 255px;
      bottom: 80px;
    }
    .about__frame2 {
      height: 290px;
      width: 314px;
      bottom: 80px;
    }
    .about__hero {
      width: 350px;
      height: 420px;
      top: 20px;
    }
  }
`;

export default About;
