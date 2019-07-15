import styled from 'styled-components';
import { media } from '../index';

const FooterStyles = styled.footer`
  background-color: #ffffff;
  display: flex;
  text-align: center;
  padding: 1em;
`;

const FooterUl = styled.ul`
  display: inline-flex;
  ${media.desktop`font-size: .75em;`};
  ${media.thone`display: block;`};
`;

const FooterLi = styled.li`
  padding: 2em 1em 2em 1em;
  ${media.tablet`padding: 1em 1em 1em 1em;`};
  ${media.thone`padding: 1em 0em 1em 0em;`};
`;

export { FooterStyles, FooterUl, FooterLi };
