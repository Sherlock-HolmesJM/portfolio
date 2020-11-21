import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { colors } from '../config';

import SubHeader from '../components/SubHeader';
import ProjectImage from '../components/ProjectImage';
import Aside from '../components/Aside';
import project_1 from '../images/project-1.jpg';
import project_2 from '../images/project-2.jpg';
import project_3 from '../images/project-3.jpg';
import project_4 from '../images/project-4.jpg';
import recordImg from '../images/record.png';

interface Props {
   className?: string,
}

function Portfolio(props: Props) {
   const { className } = props;

   const images = [project_1, project_2, project_3, project_4, recordImg];

   const [[prev, next, direction], setPage] = useState([0, 1, 1]);

   const ind1 = wrap(0, images.length, prev);


   const paginate = (newDirection: number) => {
      setPage([prev + newDirection, next + newDirection, newDirection]);
   };

   return (
      <PORTFOLIO id="portfolio" className={className}>

         <Aside></Aside>

         <Main>
            <Child1>
               <SubHeader name="Portfolio" caption="Latest Projects" />
            </Child1>

            <div>
               <ProjectContainer className="portfolio__slickSlider">
                     <ProjectImage src={images[ind1]} alt="project" name="Landing Page" category="Web Dev" 
                                    direction={direction}/>
               </ProjectContainer>

               <ProjectContainer>
                  <HiOutlineChevronLeft className="portfolio__icon" onClick={() => paginate(-1)} />
                  <HiOutlineChevronRight className="portfolio__icon" onClick={() => paginate(1)} />
               </ProjectContainer>
            </div>
         </Main>

         <Aside></Aside>

      </PORTFOLIO>
   )
}

const PORTFOLIO = styled.section`
   display: flex;
   background: ${colors.coolGray};
   min-height: 100vh;
`;

const Main = styled.main`
   flex-basis: 90%;
`;

const Child1 = styled.div`
   display: flex;
   justify-content: space-between;
`;

const ProjectContainer = styled(motion.div)`
   display: flex;
   justify-content: center;
   background: orange;

   .portfolio__icon {
      width: 30px;
      height: 30px;
      transition: color .4s ease-in-out;

      :hover { color: ${colors.orshblood} }
   }
`;

export default Portfolio