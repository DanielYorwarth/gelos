import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import SEO from '../components/Seo'


export default () => (
  <Layout>
    <SEO 
      title="Error 404"
    />
    <Hero image="services-bg.jpg" title="404"/>
    <div className="py-16 md:py-32 bg-blue px-2">
        <section className="container mx-auto text-center text-white">
            <p className="leading-loose text-center text-sm max-w-xl mx-auto mb-10">
                Looks like the page you're tring to find doesn't exist... <br/>
                Try looking at <Link className="text-white hover:text-yellow underline" to="/services">our services</Link> to find out more about what we do
            </p>
        </section>
    </div>
  </Layout>
);
