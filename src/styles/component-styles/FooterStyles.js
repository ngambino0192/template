import styled from 'styled-components';
import { media } from '../index';

const FooterStyles = styled.footer`
  background: grey;
  display: flex;
`;

const FooterUl = styled.ul`
  display: inline-flex;
  ${media.phablet`display: block; background: red;`};
`;

const FooterLi = styled.li`
  padding: 2rem;
`;

export { FooterStyles, FooterUl, FooterLi };
