import { css } from '@emotion/core';

import colors from '../themes/colors';

const style = css`
  display: inline-block;

  width: 50px;
  height: 50px;

  color: ${colors.white};
  border: 3px solid ${colors.primary};

  font-size: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 100%;

  transition: all 0.4s ease 0s;
  cursor: pointer;
`;

export default function Logo() {
  return (
    <div css={style}>B</div>
  );
}
