import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Services from '@sections/Services';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
