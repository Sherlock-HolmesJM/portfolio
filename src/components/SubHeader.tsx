import React from 'react';
import styled from 'styled-components';
import * as config from '../config';

interface Props {
   name: string,
   caption: string
}

function SubHeader(props: Props) {
   const { name, caption } = props

   return (
      <div>
         <H3>{name}</H3>
         <H2>{caption}</H2>
         <Span></Span>
      </div>
   )
}

const H2 = styled.h2`
   font-size: 35px;
   font-weight: 600;
   margin: 20px 0 10px 0;
   color: ${config.color4}
`;

const H3 = styled.h3`
   color: ${config.color3};
`;

const Span = styled.span`
   display: inline-block;
   border: 2px dashed ${config.color3};
   width: 70px;
`;

export default SubHeader
