import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const MainLayout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>

    <main>
      { children }
    </main>
  </div>
);

MainLayout.defaultProps = {
  children: '',
  title: 'This is the default title',
};

MainLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};


export default MainLayout;
