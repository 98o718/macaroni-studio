import React from 'react';
import Head from 'next/head';

import './Layout.scss';

const Layout = () => {
  return (
    <main className="layout">
      <Head>
        <title>macaroni.studio</title>
      </Head>
      <img
        className="layout__logo"
        src="/static/images/logo.png"
        alt="Macaroni Studio логотип"
      />
    </main>
  );
};

export default Layout;
