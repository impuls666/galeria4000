import { rem, lighten, darken, desaturate } from 'polished';
import { css } from 'styled-components';

const sizes = {
  xl: 1200,
  l: 992,
  m: 768,
  s: 480,
  xs: 320,
};

const media = {
  s: (...args) => css`
    @media (min-width: ${sizes.s}px) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media (min-width: ${sizes.m}px) {
      ${css(...args)};
    }
  `,
  l: (...args) => css`
    @media (min-width: ${sizes.l}px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (min-width: ${sizes.xl}px) {
      ${css(...args)};
    }
  `,
};

const color = {
  base: '#555555',
  primary: '#5283e7',
  primaryBg: '#f1f6ff',
  danger: '#e94141',
  success: '#5bd084',
  successBg: '#e8fff0',
  fadedText: '#aaa',
};

const form = {
  labelColor: color.base,
  placeholderColor: '#ccc',
};

const resposniveMenuPrimary = 'rgb(13, 49, 66)';

const responsiveMenu = {
  backgroundColor: resposniveMenuPrimary,
  subsectionBackgroundColor: darken(0.03, resposniveMenuPrimary),
  linkColor: lighten(0.9, resposniveMenuPrimary),
  linkColorHighlighted: desaturate(0.1, lighten(0.5, resposniveMenuPrimary)),
  linkHoverColor: darken(0.02, resposniveMenuPrimary),
  borderRadius: rem(4),
  siteUrlColor: desaturate(0.3, lighten(0.2, resposniveMenuPrimary)),
  siteUrlBorder: desaturate(0.3, lighten(0.2, resposniveMenuPrimary)),
};

const select = {
  placeholderColor: '#ccc',
  darkerBg: '#f9f9f9',
};

const table = {
  headerBg: '#f9f9f9',
  evenRow: color.base,
  evenRowBg: '#f9f9f9',
  oddRow: color.base,
  oddRowBg: '#ffffff',
  hover: '#f2f2f2',
  activeRow: color.base,
  activeRowBg: color.primaryBg,
  highlightRow: color.base,
  highlightRowBg: color.successBg,
};

const grid = {
  gutterWidth: `0 ${rem(10)}`,
};

const theme = {
  color,
  form,
  table,
  select,
  media,
  grid,
  resposniveMenuPrimary,
  responsiveMenu,
  textColor: color.base,
  inactiveColor: '#ddd',
  separatorColor: '#eee',
  baseBorderRadius: rem(2),
  largeBorderRadius: rem(4),
  fontFamily: `'Roboto', sans-serif`,
  backgroundColor: '#fff',
  shadow: `0 0 ${rem(40)} 0 rgba(0, 0, 0, 0.2)`,
  focusShadow: `0 0 ${rem(20)} 0 rgba(82,131,231,0.3)`,
};

export default theme;
