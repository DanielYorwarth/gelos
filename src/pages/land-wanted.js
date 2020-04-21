import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import Image from '../components/Image';
import SEO from '../components/Seo'


export default () => (
  <Layout>
    <SEO 
      title="Land Wanted" 
      description="Even with our dedicated team of land finders we are always on the look out for buying opportunities."
      keywords="Land Wanted"
    />
    <Hero image="land-bg.jpg" title="Land Wanted"/>
    <div className="py-16 md:py-32 bg-blue px-2">
        <section className="text-white">
            <h2 className="text-center text-3xl font-medium uppercase mb-10">Land Wanted</h2>
            <div className="flex flex-wrap leading-loose text-sm relative">
                <svg className="absolute g-logo select-none" xmlns="http://www.w3.org/2000/svg" width="648.274" height="677" viewBox="0 0 648.274 677">
                    <path id="Path_57" data-name="Path 57" d="M514.348,865.652q-34.423,9.056-63.184,9.058-114.029,0-191.249-39.282T144.091,721.62Q105.48,647.1,105.48,541.6q0-101.463,45.344-179.577T277.2,240.8q81.031-43.1,184.74-43.094,59.257,0,101.232,15.714a282.115,282.115,0,0,1,77.446,43.993q8.979,8.529,18.4,8.529t14.815-13.241q5.392-13.244,8.083-41.978h21.1q-3.594,65.1-3.594,229.86h-21.1q-4.486-48.04-13.017-81.259t-25.589-59.26q-17.059-26.045-46.242-46.242-18.856-13.023-44.445-20.2a185.329,185.329,0,0,0-50.278-7.184q-66,0-106.853,46.465T333.995,390.081q-17.067,70.7-17.064,147.926,0,160.271,39.286,239.283t108.416,79.015q28.734,0,45.343-11.226a39.948,39.948,0,0,0,4.371-3.538ZM617.962,554.035l.015-.061-126.384-2.29v18.4q17.059,1.8,24.467,7.408t10.327,21.324c1.945,10.479,2.919,58.336,2.919,81.385v27.021l-.025.03V799.29c0,1.254-.1,2.412-.137,3.62v58.508q20.311-6.245,42.465-15.424V602.608H586.4V839.617q9.885-4.409,20.1-9.352c3.183-1.554,6.23-3,9.215-4.376V602.608H630.5V819.43c1.091-.447,2.082-.8,3.138-1.219,6.539-2.792,15.714-6.61,26.183-10.57V602.608h14.789V802.285c13.54-4.656,28.091-8.951,41.429-11.408V679.424c0-23.05.975-70.907,2.919-81.386s5.387-17.582,10.327-21.324,13.094-6.209,24.467-7.408V550.9Q711.144,553.941,617.962,554.035Z" transform="translate(-105.48 -197.71)" fill="#fff" opacity="0.048"/>
                </svg>
                <div className="container mx-auto flex flex-wrap items-center lg:-mt-24 xl:-mt-40 relative">
                    <div className="w-full md:w-1/2 md:pr-10 mb-5 md:mb-0 lg:-mr-16">
                        <p className="mb-5">Even with our dedicated team of land finders we are always on the look out for buying opportunities. Whilst we will look at all plots in Essex, Cambridgeshire, Suffolk and Kent we are interested in land that:</p>
                        <ul className="font-bold mb-5">
                            <li className="flex items-center">
                                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="13.177" height="9.087" viewBox="0 0 13.177 9.087">
                                    <path id="Checkbox" d="M5.225,9.087,0,3.862,1.06,2.8,5.225,6.891,12.117,0l1.06,1.06Z" fill="#d89933"/>
                                </svg>
                                Has a close proximity to a conurbation with a population of 10,000 or more
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="13.177" height="9.087" viewBox="0 0 13.177 9.087">
                                    <path id="Checkbox" d="M5.225,9.087,0,3.862,1.06,2.8,5.225,6.891,12.117,0l1.06,1.06Z" fill="#d89933"/>
                                </svg>
                                Is connected to a local transport system
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="13.177" height="9.087" viewBox="0 0 13.177 9.087">
                                    <path id="Checkbox" d="M5.225,9.087,0,3.862,1.06,2.8,5.225,6.891,12.117,0l1.06,1.06Z" fill="#d89933"/>
                                </svg>
                                Is close to a good mix of amenities.
                            </li>
                        </ul>
                        <p>Existing care homes or other commercial sites will also be considered. Please contact us on <a className="text-white underline hover:text-yellow" href="mailto:enquiries@geloshealthcare.com">enquiries@geloshealthcare.com</a> or phone on <a className="text-white underline hover:text-yellow" href="tel:02098765432">0209 876 5432</a></p>
                    </div>
                    <div className="w-full md:w-1/2 lg:-ml-16">
                        <Image alt="UK Land" filename="land-wanted.png" />          
                    </div>
                </div>
            </div>
        </section>
    </div>
  </Layout>
);
