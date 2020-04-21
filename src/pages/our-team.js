import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import Image from '../components/Image';
import SEO from '../components/Seo'
import Seporator from '../components/Seporator';


export default () => (
  <Layout>
    <SEO 
      title="About" 
      description="Meet the team behind Gelos."
      keywords="Healthcare, Healthcare Investing"
    />
    <Hero image="about-bg.jpg" title="Our Team"/>
    <div className="py-16 md:py-32 bg-blue px-2">
        <div className="max-w-4xl mx-auto">
            <section className="container mx-auto text-white">
                <h2 className="text-center text-3xl font-medium uppercase mb-10">Leadership Team</h2>
                <div className="flex flex-wrap leading-loose text-sm">
                    <div className="w-full md:w-1/2 md:pr-10 mb-5 md:mb-0">
                        <Image alt="Mike" classes="mb-5 max-w-sm profile-image" filename="mike.jpg" />
                        <h3 className="text-2xl font-medium">Mike Volf</h3>
                        <p>Mike Volf is a 30 year veteran of the health and social care market in the UK. He has developed and operated care homes and hospitals in the UK and fully understands the intricacies of property design and construction to the long term viability of healthcare property as only a care provider can.
                          <br/><br/>
                          Mike is a principal in a family-owned care business and he is perfectly placed to identify suitable opportunities efficiently, allowing Gelos to move quickly to secure sustainable and commercial investments.
                          <br/><br/>
                          Mike’s knowledge of industry best practice, compliance and care outcomes as well as the regulatory environment ensures that property decisions are taken through the eyes of an operator.</p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-10">
                        <Image alt="Sheridan" classes="mb-5 max-w-sm profile-image" filename="sheridan.jpg" />
                        <h3 className="text-2xl font-medium">Sheridan Norrey</h3>
                        <p>Sheridan Norrey spent nearly 15 years working in the City of London in a range of capital markets roles before becoming a Managing Director at CitiBank. Since leaving the City, Sheridan founded a property development company specialising in opportunistic and value add development projects, from sourcing land and properties to financing, developing and selling.<br/><br/>
                        Sheridan’s ability to combine project management and property development skills, coupled with an innate ability to identify value gives Gelos all the experience needed to acquire successful sites, minimise project and financial risk and maximise investment returns.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  </Layout>
);
