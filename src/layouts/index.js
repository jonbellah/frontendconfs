import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'react-table/react-table.css';
import '../assets/scss/style.scss'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Email from '../components/Email';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="FrontEndConfs.com - A curated list of upcoming front-end web development conferences"
      meta={[
        { name: 'description', content: 'A curated list of upcoming front-end web development conferences' },
        { name: 'keywords', content: 'front-end conferences, front-end, web development, html, css, javascript' },
      ]}
    />
    <Header />
    {children()}
    <Email />
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
