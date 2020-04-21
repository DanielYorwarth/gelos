import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';


export default () => (
  <Layout>
    <Hero image="services-bg.jpg" title="Terms & Conditions"/>
    <div className="py-16 md:py-32 bg-blue px-2">
        <section className="container mx-auto text-white">
            <div className="leading-loose text-sm">
            This website, geloshealthcare.com (the “Site”), and all personal information collected from users of this site, is owned solely by “Gelos Healthcare”. In these Website Terms references to “we”, “us”, “our”, are references to “Gelos Healthcare”.
            <br/><br/>
            <strong>1. AGREEMENT</strong><br/>
            By accessing, using, browsing or booking on this site you agree that you have read, understood and agree to be bound by these Terms of Use and you agree to comply with all applicable laws, rules and regulations. Nothing in this site shall constitute an offer to supply goods or services.
            <br/><br/>
            <strong>2. CHANGES TO SITE</strong><br/>
            Further, we may change this Site at any time without notice by adding or removing features or services. This will be without liability to you. We do not warrant that the information accessible via this Site is accurate and assumes no duty to update such information. We do not accept liability for any errors or omissions. We use its best endeavours to ensure that information contained in this website is accurate and not misleading.
            <br/><br/>
            <strong>3. LAW AND JURISDICTION</strong><br/>
            This contract is subject to the law of England and Wales. All disputes arising out of this contract shall be subject to the exclusive jurisdiction of the courts of England and Wales. Those who access the site from other locations are responsible for compliance with their local laws and taxes as applicable. Any disputes not resolved by normal complaints procedure will be resolved exclusively in the courts of England and Wales under English Law.
            <br/><br/>
            <strong>4. DATA PRIVACY</strong><br/>
            We have a privacy statement for all clients. All personal details that you give us are securely stored. We do not supply or sell customers details to any outside organisation. We will endeavour to take all reasonable care, in so far as it is possible to do so, to keep all details of any orders and payments secure, but, in the absence of negligence on our part we cannot be held liable for any loss you may suffer if a third party procures unauthorised access to any data you provide when accessing or ordering.
            <br/><br/>
            <strong>5. CONDITIONS OF USE – COPYRIGHT</strong><br/>
            You may save and print individual items included on this Site. However this must be for your personal, non-commercial use only. You may also send selected individual items to other users of the site or your friends or work colleagues provided that they only use them for their own personal, non-commercial use. Any other onward distribution or further publication is prohibited.
            <br/><br/>
            <strong>6. LINKS</strong><br/>
            Any links featured on this Site have been included for your convenience only. The inclusion of a link does not imply that we endorse or accept any responsibility for the linked site, its content or its provider. Access to a linked site will be subject to that sites own terms and conditions, to which you should refer.
            <br/><br/>
            <strong>7. FURTHER DETAILS</strong><br/>
            For any further details about our website terms of use please e-mail <a className="text-white underline hover:text-yellow" href="mailto:enquiries@geloshealthcare.com">enquiries@geloshealthcare.com.</a> Please note we reserve the right to change these terms of use with any changes being posted onto this page.
            </div>
        </section>
    </div>
  </Layout>
);
