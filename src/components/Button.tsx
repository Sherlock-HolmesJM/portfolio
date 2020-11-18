import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as config from '../config';

const Button = styled(motion.button)`
   font-family: 'Montserat' sans-serif;
   font-size: 15px;
   padding: 10px;
   color: ${config.white};
   background: ${config.navyblueDark};
   outline: none;
   border: none;
   border-radius: 5px;
   width: 120px;
   height: 50px;
   margin-top: 15px;

   :hover { cursor: pointer; }
`;

export default Button;