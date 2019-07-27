import { css } from 'styled-components';

const theme = {
  colors: {
    darkGrey: '#333333',
    yellow: '#fed136',
    blue: '#11a9cc',
    blueRGB: 'rgb(17, 169, 204, 1)'
  },

  fontSizes: {
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '24px'
  },

  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  buttonBlueXl: css`
    color: #fff;
    background-color: #00bcd4;
    border-color: #00bcd4;
    font-family: 'Robot', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 3px;
    font-size: 16px;
    padding: 15px 40px;
    letter-spacing: 1px;
    font-size: 0.9em;
  `
};

export default theme;

// .btn: hover, .btn: focus, .btn: active, .btn.active, .open.dropdown - toggle.btn {
//   color: #fff;
//   background - color: #FED136;
//   border - color: #FED136;
// }
