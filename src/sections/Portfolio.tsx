import React, { useState } from 'react';
import styled from 'styled-components';
import { wrap } from 'popmotion';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { colors, mediaQueries } from '../config';

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

         <div className="portfolio__main">
            <SubHeader name="Portfolio" caption="Latest Projects" />

            <div className="portfolio__frame">
               <div className="portfolio__slickSlider">
                     <ProjectImage src={images[ind1]} alt="project" name="Landing Page" category="Web Dev" 
                                    direction={direction}/>
               </div>

               <div className="portfolio__iconContainer">
                  <HiOutlineChevronLeft className="portfolio__icon" onClick={() => paginate(-1)} />
                  <HiOutlineChevronRight className="portfolio__icon" onClick={() => paginate(1)} />
               </div>
            </div>
         </div>

         <Aside></Aside>

      </PORTFOLIO>
   )
}

const PORTFOLIO = styled.section`
   display: flex;
   background: ${colors.coolGray};
   min-height: 100vh;

   .portfolio__main {
      flex-basis: 90%;
   }
   .portfolio__frame {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 800px;
      margin: auto;
   }
   .portfolio__slickSlider {
      border: 10px solid ${colors.purple};
      border-radius: 20px 20px 0 0;
      width: 100%;
   }
   .portfolio__iconContainer {
      display: flex;
      justify-content: center;
      background: ${colors.purple};
      padding: 10px;
      border-radius: 0 0 20px 20px;
      width: 100%;
   }
   .portfolio__icon {
      width: 30px;
      height: 30px;
      transition: color .4s ease-in-out;

      :hover { color: ${colors.orshblood} }
   }

   @media only screen and (${mediaQueries.query1}) {
      .portfolio__frame {
         width: 100%;
      }
   }
`;

export default Portfolio