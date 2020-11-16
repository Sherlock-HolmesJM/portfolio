import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import * as config from '../config';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Button from '../components/Button';
import SubHeader from '../components/SubHeader';
import ProjectImage from '../components/ProjectImage';
import project_1 from '../images/project-1.jpg';
import project_2 from '../images/project-2.jpg';
import project_3 from '../images/project-3.jpg';
import project_4 from '../images/project-4.jpg';
import project_5 from '../images/project-5.jpg';

interface Props {}

function Portfolio(props: Props) {
   // const {} = props

   const images = [project_1, project_2, project_3, project_4, project_5];

   const [[prev, mid, next, direction], setPage] = useState([0, 1, 2, 1]);

   const ind1 = wrap(0, images.length, prev);
   const ind2 = wrap(0, images.length, mid);
   const ind3 = wrap(0, images.length, next);


   const paginate = (newDirection: number) => {
      setPage([prev + newDirection, mid + newDirection, next + newDirection, newDirection]);
   };

   const variants = {
      enter: (direction: number) => ({ 
         // x: direction > 0 ? 100 : -100,
      }),
      center: {
         // x: 0,
      },
      exit: (direction: number) => ({
         // x: direction > 0 ? 100 : -100,
      })
   };

   return (
      <PORTFOLIO>

         <Aside></Aside>

         <Main>
            <Child1>
               <SubHeader name="Portfolio" caption="Latest Projects" />
               <Button>All Projects</Button>
            </Child1>

            <Child2>
               <AnimatePresence initial={false} custom={direction}>
                  <ProjectContainer>
                     <ProjectImage src={images[ind1]} alt="" name="Landing Page" category="Web development"/>
                     <ProjectImage src={images[ind2]} alt="" name="Landing Page" category="Web development"/>
                     <ProjectImage src={images[ind3]} alt="" name="Landing Page" category="Web development"/>
                  </ProjectContainer>
               </AnimatePresence>

               <ProjectContainer>
                  <HiOutlineChevronLeft className="portfolio__icon" onClick={() => paginate(-1)} />
                  <HiOutlineChevronRight className="portfolio__icon" onClick={() => paginate(1)} />
               </ProjectContainer>
            </Child2>
         </Main>

         <Aside></Aside>

      </PORTFOLIO>
   )
}

const PORTFOLIO = styled.section`
   display: flex;
`;

const Main = styled.main`
   flex-basis: 90%;
`;

const Child1 = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 5px;
`;

const Child2 = styled.div`

`;

const ProjectContainer = styled(motion.div)`
   overflow: hidden;
   display: flex;
   justify-content: center;

   .portfolio__icon {
      width: 30px;
      height: 30px;
      transition: color .4s ease-in-out;

      :hover { color: ${config.color3} }
   }
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default Portfolio