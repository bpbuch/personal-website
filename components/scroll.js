import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import colors from '../themes/colors';

const scroll = keyframes`
  0% {
    opacity: 1;
    top: 8px;
  }
  30% {
    opacity: 1;
    top: 8px;
  }
  70% {
    opacity: 0;
    top: 18px;
  }
  100% {
    opacity: 0;
    top: 18 px;
  }
`;

const Mouse = styled.div`
  height: 35px;
  width: 20px;
  margin: 0 auto;

  border-radius: 15px;
  border: 2px solid ${colors.primary};

  ::after {
    position: absolute;
    top: 8px;
    left: 50%;

    width: 5px;
    height: 5px;

    border-radius: 50%;
    background-color: ${colors.white};

    transform: translateX(-50%);

    content: "";
    animation: ${scroll} 1.2s linear infinite;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  
  color: ${colors.white};
`;

export default function Scroll() {
  return (
    <div>
      <Mouse />
      <Description>Scroll</Description>
    </div>
  );
}
