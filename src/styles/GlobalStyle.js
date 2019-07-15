import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
// Deconstructing theme
const { fontSizes, colors, transition } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.45;
    font-family: 'Open Sans';
    ${
      '' /* Below are some examples on how you can use themes and media queries */
    }
    transition: ${transition};
    ${media.phablet`font-size: ${fontSizes.xsmall};`};
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.yellow};
      outline: 1;
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    display: inline-flex;
    padding: 8px 20px;
    margin-bottom: 0;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .visible {
    background: ${colors.darkGrey};
  }
  
  .vacation-img-container .vacation-img-overlay {
    background: rgba(0,0,0,0.5);
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;

    ${media.tablet`opacity: 1; background: rgba(0,0,0,0.3);`};
}

.vacation-img-container:hover .vacation-img-overlay{
  opacity: 1;
}

.vacation-img-container:hover .text-hover-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}
  `;

export default GlobalStyle;
