import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  FaGithub, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';

import colors from '../themes/colors';
import HorizontalList from './list';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: linear-gradient(
      50deg,
      rgba(146, 146, 146, 0.02) 0%,
      rgba(146, 146, 146, 0.02) 25%,
      rgba(82, 82, 82, 0.02) 25%,
      rgba(82, 82, 82, 0.02) 50%,
      rgba(217, 217, 217, 0.02) 50%,
      rgba(217, 217, 217, 0.02) 75%,
      rgba(41, 41, 41, 0.02) 75%,
      rgba(41, 41, 41, 0.02) 100%
    ),
    linear-gradient(
      252deg,
      rgba(126, 126, 126, 0.01) 0%,
      rgba(126, 126, 126, 0.01) 25%,
      rgba(117, 117, 117, 0.01) 25%,
      rgba(117, 117, 117, 0.01) 50%,
      rgba(219, 219, 219, 0.01) 50%,
      rgba(219, 219, 219, 0.01) 75%,
      rgba(41, 41, 41, 0.01) 75%,
      rgba(41, 41, 41, 0.01) 100%
    ),
    linear-gradient(
      272deg,
      rgba(166, 166, 166, 0.01) 0%,
      rgba(166, 166, 166, 0.01) 20%,
      rgba(187, 187, 187, 0.01) 20%,
      rgba(187, 187, 187, 0.01) 40%,
      rgba(238, 238, 238, 0.01) 40%,
      rgba(238, 238, 238, 0.01) 60%,
      rgba(204, 204, 204, 0.01) 60%,
      rgba(204, 204, 204, 0.01) 80%,
      rgba(5, 5, 5, 0.01) 80%,
      rgba(5, 5, 5, 0.01) 100%
    ),
    linear-gradient(
      86deg,
      rgba(143, 143, 143, 0.02) 0%,
      rgba(143, 143, 143, 0.02) 12%,
      rgba(36, 36, 36, 0.02) 12%,
      rgba(36, 36, 36, 0.02) 25%,
      rgba(23, 23, 23, 0.02) 25%,
      rgba(23, 23, 23, 0.02) 37%,
      rgba(223, 223, 223, 0.02) 37%,
      rgba(223, 223, 223, 0.02) 50%,
      rgba(101, 101, 101, 0.02) 50%,
      rgba(101, 101, 101, 0.02) 62%,
      rgba(94, 94, 94, 0.02) 62%,
      rgba(94, 94, 94, 0.02) 75%,
      rgba(148, 148, 148, 0.02) 75%,
      rgba(148, 148, 148, 0.02) 87%,
      rgba(107, 107, 107, 0.02) 87%,
      rgba(107, 107, 107, 0.02) 100%
    ),
    linear-gradient(
      25deg,
      rgba(2, 2, 2, 0.02) 0%,
      rgba(2, 2, 2, 0.02) 16%,
      rgba(51, 51, 51, 0.02) 16%,
      rgba(51, 51, 51, 0.02) 33%,
      rgba(26, 26, 26, 0.02) 33%,
      rgba(26, 26, 26, 0.02) 50%,
      rgba(238, 238, 238, 0.02) 50%,
      rgba(238, 238, 238, 0.02) 67%,
      rgba(128, 128, 128, 0.02) 67%,
      rgba(128, 128, 128, 0.02) 83%,
      rgba(21, 21, 21, 0.02) 83%,
      rgba(21, 21, 21, 0.02) 101%
    ),
    linear-gradient(
      325deg,
      rgba(95, 95, 95, 0.03) 0%,
      rgba(95, 95, 95, 0.03) 14%,
      rgba(68, 68, 68, 0.03) 14%,
      rgba(68, 68, 68, 0.03) 28%,
      rgba(194, 194, 194, 0.03) 28%,
      rgba(194, 194, 194, 0.03) 42%,
      rgba(51, 51, 51, 0.03) 42%,
      rgba(51, 51, 51, 0.03) 57%,
      rgba(110, 110, 110, 0.03) 57%,
      rgba(110, 110, 110, 0.03) 71%,
      rgba(64, 64, 64, 0.03) 71%,
      rgba(64, 64, 64, 0.03) 86%,
      rgba(31, 31, 31, 0.03) 87%,
      rgba(31, 31, 31, 0.03) 101%
    ),
    linear-gradient(90deg, hsl(80, 0%, 14%), hsl(80, 0%, 14%)
  );
`;

const Name = styled.h1`
  font-size: 6.5rem;
  font-weight: 700;
  font-spacing: 20;
  margin: 0 auto;
  text-align: center;
  color: ${colors.white};
`;

const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;

  font-size: 2.4rem;
  font-weight: 400;

  text-align: center;
  color: ${colors.white};
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 50px;
`;

const iconStyle = css`
  margin: 5px 20px;

  color: ${colors.white};
  font-size: 2.4rem;
  
  cursor: pointer;
  transition: all 0.4s ease 0s;

  :hover {
    color: ${colors.primary};
  }
`;

const Divider = styled.hr`
  border: 1px solid ${colors.primary};
  width: 64px;
  margin: 50px auto;
`;

export default function Hero() {
  return (
    <Background>
      <div>
        <Divider />
        <Name>Brian Buchanan</Name>
        <Description>I build reliable, scalable solutions to difficult problems</Description>
        <ContactWrapper>
          <HorizontalList>
            <a id="github" href="https://github.com/bpbuch" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Github">
              <FaGithub css={iconStyle} />
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/bpbuch" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn">
              <FaLinkedin css={iconStyle} />
            </a>
            <a id="email" href="mailto:example@gmail.com" aria-label="Reach out to me via Email">
              <FaEnvelope css={iconStyle} />
            </a>
          </HorizontalList>
        </ContactWrapper>
        <Divider />
      </div>
    </Background>
  );
}
