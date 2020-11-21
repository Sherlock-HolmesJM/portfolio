import styled from 'styled-components';
import { mediaQueries } from '../config';

const Aside = styled.aside`
   flex-basis: 10%;

   @media only screen and (${mediaQueries.query2}) {
      flex-basis: 5%;
   }
`;

export default Aside