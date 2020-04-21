import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import Image from '../components/Image';
import SEO from '../components/Seo'


export default () => (
  <Layout>
    <SEO 
      title="Partners" 
      description="Gelos is pleased to have a relationship with Stour Valley Care Group..."
      keywords="Healthcare, Healthcare Investing"
    />
    <Hero image="services-bg.jpg" title="Our Partners"/>
    <div className="py-16 md:py-32 bg-blue px-2">
        <section className="container mx-auto text-center text-white">
            <Image alt="Stour Valley" classes="max-w-md block mx-auto mb-10" filename="stour-valley.png" />
            <p className="leading-loose text-center text-sm max-w-xl mx-auto mb-10">
                Gelos is pleased to have a relationship with Stour Valley Care Group and we are looking forward to increasing our projects with them.
            </p>
            <a className="inline-block text-center mx-auto text-white hover:text-yellow text-sm" target="_blank" href="http://mistleymanor.com">
                <div className="flex items-center">
                    Visit Website
                    <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="16.519" height="10.166" viewBox="0 0 16.519 10.166">
                        <g id="Forward_arrow" data-name="Forward arrow" transform="translate(10)">
                            <path id="Path_10" data-name="Path 10" d="M1.436,0,.512.924l3.5,3.5H-10v1.32H4.01l-3.5,3.5.924.924L6.519,5.083Z" fill="#fff"/>
                        </g>
                    </svg>
                </div>
            </a>
        </section>
    </div>
  </Layout>
);
