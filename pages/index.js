import styled from '@emotion/styled';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ScrollIndicator from '../components/scroll';

import colors from '../themes/colors';

const ScrollWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2vmin;
  transform: translateX(-50%);
`;

const ComingSoon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  color: ${colors.white};
  text-align: center;
  font-size: 10rem;
`;

export default function Index() {
  return (
    <Layout>
      <section id="home">
        <Hero />
        <ScrollWrapper>
          <ScrollIndicator />
        </ScrollWrapper>
      </section>
      <section id="construction">
        <ComingSoon>
          <p>Coming Soon</p>
        </ComingSoon>
      </section>
      <section id="blog" />
      <section id="contact" />
    </Layout>
  );
}
