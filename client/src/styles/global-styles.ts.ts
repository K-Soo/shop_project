import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 'sans-serif' ;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  button {
    border: 0;
  }

  blockquote,
  q {
    quotes: none;
  }

  * {
    box-sizing: border-box;
  }

  body{
    padding-top: 40px;
  }
`;
