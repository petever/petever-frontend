import { css } from '@emotion/react';

export const common = css`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    text-size-adjust: none;
    font-smoothing: antialiased;
    line-height: 1.5;
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
