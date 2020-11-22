import React from 'react'
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
   src: any,
   alt: string,
   name: string,
   category: string,
   direction?: number,
}

function ProjectImage(props: Props) {
   const { src, alt, direction } = props;

   const num = 1000;

   const variants = {
      enter: (direction: number) => {
        return {
          x: direction > 0 ? num : -num,
          opacity: 0,
        };
      },
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (direction: number) => {
        return {
          zIndex: 0,
          x: direction < 0 ? num : -num,
          opacity: 0,
          transition: { duration: 0.2 }
        };
      }
    };

   return (
         <AnimatePresence custom={direction} exitBeforeEnter>
            <Img 
               key={src}
               className="img"
               src={src} 
               alt={alt} 
               variants={variants} 
               custom={direction} 
               initial="enter" 
               animate="center" 
               exit="exit"
               transition={{
                     x: { type: "spring", stiffness: 300, damping: 30 },
                     opacity: { duration: 0.2 }
                  }}
            />
         </AnimatePresence>
   )
}

const Img = styled(motion.img)`
   height: 348px;
   width: 100%;
   border-radius: 12px;
`;

export default ProjectImage
