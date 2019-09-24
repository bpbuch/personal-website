import Head from 'next/head';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';

import colors from '../../themes/colors';

import Header from '../header';

const globalStyle = css`
  html,
  body {
    min-height: 100%;
    padding: 0;
    margin: 0;

    background: ${colors.background};
      
    font-size: 62.5%;
    font-family: Helvetica Neue, Product Sans,Arial, sans-serif;
    
    scroll-behavior: smooth;

    @media only screen and (max-width : 320px) {
      font-size: 37.5%;
    }
  }
`;

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Brian Buchanan</title>
        <meta name="description" content="Personal Portfolio" />
        <meta name="keywords" content="HTML,CSS,JavaScript,React,Next,Emotion" />
        <meta name="author" content="Brian Buchanan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Global styles={globalStyle} />
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
