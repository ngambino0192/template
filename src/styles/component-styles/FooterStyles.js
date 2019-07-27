import styled from 'styled-components';
import { media } from '../index';

const FooterStyles = styled.footer`
  background-color: #ffffff;
  display: flex;
  text-align: center;
`;

const FooterUl = styled.ul`
  display: inline-flex;
  ${media.phablet`display: block; background: red;`};
`;

const FooterLi = styled.li`
  padding: 2em 1em 2em 1em;
`;

export { FooterStyles, FooterUl, FooterLi };
