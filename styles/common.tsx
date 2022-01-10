import { css } from '@emotion/react';

export const common = css`
  * {
    box-sizing: border-box;
  }
  body {
    text-size-adjust: none
    font-smoothing: antialiased;
  }
  button {
    // background: #fff;
    border: 0;
  }
  ul,
  li,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
