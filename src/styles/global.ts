import { css } from '@emotion/react';

const global = css`
  :root {
    --font-family: sans-serif;
    --main-blue: rgb(85, 72, 255);
    --main-white: #ffffff;
    --main-black: #1c1c1c1c;
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  }

  /* HTML 요소 기본 스타일 초기화 */
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
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 14px;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--background-gray);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
  }
`;

export default global;
