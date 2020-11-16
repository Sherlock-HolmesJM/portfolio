import React from 'react'
import styled from 'styled-components';

interface Props {
   src: any,
   alt: string,
   name: string,
   category: string,
}

function ProjectImage(props: Props) {
   const { src, alt, name, category } = props;

   return (
         <Div>
            <Img src={src} alt={alt} />
            <H3>{name}</H3>
            <P>{category}</P>
         </Div>
   )
}

const Div = styled.div`
   position: relative;
   margin: 10px;
`;

const Img = styled.img`
   width: 350px;
   height: 300px;
`;

const H3 = styled.h3`
   position: absolute;
   bottom: 20px;
   left: 5px;
`;

const P = styled.p`
   position: absolute;
   bottom: -5px;
   left: 5px;
`;

export default ProjectImage
