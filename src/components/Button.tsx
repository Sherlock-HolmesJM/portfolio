import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../config';

const Button = styled(motion.button)`
   font-family: 'Montserat' sans-serif;
   font-size: 18px;
   font-weight: 600;
   padding: 10px;
   color: ${colors.coolGray};
   background: ${colors.navyblueDark};
   outline: none;
   border: none;
   border-radius: 5px;
   width: 120px;
   height: 50px;
   margin-top: 15px;

   & a {
      text-decoration: none;
   }

   :hover { cursor: pointer; }
`;

export default Button;