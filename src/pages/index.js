import React from 'react';
import Layout from '../components/layout/Layout';
import HomeHero from '../components/Home/HomeHero';
import Seporator from '../components/Seporator';
import SEO from '../components/Seo'


export default () => (
  <Layout>
    <SEO 
      title="Gelos Healthcare" 
      description="Gelos Healthcare Limited is a specialist healthcare development and investment business which offers partners a rarely found end-to-end service creating sustainable investment into the UK health and social care market."
      keywords="Healthcare, Healthcare Investing"
    />
    <HomeHero image="hero-bg.jpg" title="DELIVERING RETURNS ON </br>HEALTHCARE INVESTMENT"/>
    <section className="bg-blue py-16 md:py-32 px-2">
      <div className="container mx-auto">
        <Seporator />
        <p className="text-white text-lg leading-loose">Gelos Healthcare Limited is a specialist healthcare development and investment business which offers partners a rarely found end-to-end service creating sustainable investment into the UK health and social care market.</p>
      </div>
    </section>
  </Layout>
);
