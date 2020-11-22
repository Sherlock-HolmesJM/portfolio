import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { colors, mediaQueries } from '../config';

import SubHeader from '../components/SubHeader';
import ProjectImage from '../components/ProjectImage';
import Aside from '../components/Aside';


interface Props {
   className?: string,
}

function Portfolio(props: Props) {
   const { className } = props;

   const [[ next, direction], setPage] = useState([1, 1]);

   const paginate = (newDirection: number) => {
      setPage([next + newDirection, newDirection]);
   };

   return (
      <PORTFOLIO id="portfolio" className={className}>

         <Aside></Aside>

         <div className="portfolio__main">
            <SubHeader name="Portfolio" caption="Latest Projects" />

            <div className="portfolio__frame">
               <div className="portfolio__slickSlider">
                     <ProjectImage nextValues={[next, direction]}/>
               </div>

               <div className="portfolio__iconContainer">
                  <HiOutlineChevronLeft className="portfolio__icon" onClick={() => paginate(1)} />
                  <HiOutlineChevronRight className="portfolio__icon" onClick={() => paginate(-1)} />
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
      display: flex;
      flex-direction: column;
   }
   .portfolio__frame {
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      background: ${colors.purple};
      background-image: ${colors.bg_linear_grad};
      border-radius: 20px;
      width: 800px;
   }
   .portfolio__slickSlider {
      width: 100%;
   }
   .portfolio__iconContainer {
      display: flex;
      justify-content: center;
      padding: 10px;
      width: 100%;
   }
   .portfolio__icon {
      width: 30px;
      height: 30px;
      transition: color .4s ease-in-out;
      cursor: pointer;

      :hover { color: ${colors.orshblood} }
   }

   @media only screen and (${mediaQueries.query1}) {
      .portfolio__frame {
         width: 100%;
      }
   }
`;

export default Portfolio