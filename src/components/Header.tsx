import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuToggle } from './MenuToggle';
import Nav from './Nav';
import logo from '../logo.svg';
import Aside from '../components/Aside';

import { Context } from '../context';
import { colors } from '../config';

interface Props {}

function Header(props: Props) {
  const { isOpen, matches, sticky } = useContext(Context);

  const logoVariants = {
    start: {
      scale: 0,
    },
    stop: {
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <Section
      id='header'
      className={sticky ? 'header-sticky' : ''}
      initial={false}
      animate={!matches ? 'keep' : isOpen ? 'open' : 'closed'}
    >
      <Aside></Aside>

      <main className='header__main'>
        <div className='header__div'>
          <motion.img
            className='header__img'
            variants={logoVariants}
            initial='start'
            animate='stop'
            src={logo}
            alt='logo'
          />
        </div>

        <Nav />

        <MenuToggle />
      </main>

      <Aside></Aside>
    </Section>
  );
}

const Section = styled(motion.header)`
  position: absolute;
  top: 0;
  display: flex;
  height: 47px;
  width: 100%;
  min-width: 405px;
  background: ${colors.transparent};
  z-index: 111;

  &.header-sticky {
    position: sticky;
    background: ${colors.coolGray};
  }

  .header__main {
    flex-basis: 90%;
    display: flex;
    justify-content: space-between;
  }
  .header__div {
    width: 150px;
  }
  .header__img {
    width: 100%;
  }
`;

export default Header;
