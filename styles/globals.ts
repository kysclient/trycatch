import { css, Theme } from '@emotion/react';

export const GlobalStyles = (theme: Theme) => css`
  /* reset css 적용 */
  body {
    background: ${theme.bg.bodyBg};
    color: ${theme.text.bodyText};
  }
`;

export default GlobalStyles;