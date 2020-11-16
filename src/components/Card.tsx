import React from 'react';
import styled from 'styled-components';
import * as config from '../config';


interface Props {
   caption: string,
   text: string,
   Icon: any

}

const transition = 'all .5s ease-in-out;';

function Card(props: Props) {
   const { caption, Icon, text } = props;

   return (
      <CARD>
         <IconDiv className="card__iconDiv">
            <Icon className="card__icon" />
         </IconDiv>

         <Caption className="card__caption">{caption}</Caption>

         <Text className="card__text">{text}</Text>
      </CARD>
   )
}

const CARD = styled.div`
   background: ${config.color1};
   width: 280px;
   padding: 20px;
   margin: 10px;
   border: 3px dashed ${config.color6};
   border-radius: 10px;
   transition: ${transition};

   &:hover { 
      background: ${config.color3};
      color: ${config.color1};
      border: 3px solid ${config.color1};
   }

   &:hover .card__iconDiv {
      background: ${config.color1};
      color: ${config.color3};
   }

   &:hover .card__caption, &:hover .card__text {
      color: ${config.color1};
   }
`;

const IconDiv = styled.div`
   display: flex;
   justify-content: center;
   width: 80px;
   height: 80px;
   font-size: 46px;
   line-height: 40px;
   background: ${config.color3};
   color: ${config.color1};
   text-align: center;
   border-radius: 30px;
   border-bottom-right-radius: 0px;
   transition: ${transition};

   .card__icon {
      width: 60%;
      height: 60%;
      align-self: center;
   }

`;

const Caption = styled.h2`
   color: ${config.color4};
   transition: ${transition};
`;

const Text = styled.p`
   color: ${config.color5};
   transition: ${transition};
   font-size: 18px;
   font-weight: 400px;
`;

export default Card
