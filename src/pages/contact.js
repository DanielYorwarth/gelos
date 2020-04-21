import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import SEO from '../components/Seo'


export default () => (
  <Layout>
    <SEO 
      title="Contact" 
      description="Get in touch with us"
      keywords="Healthcare, Healthcare Investing"
    />
    <Hero image="contact-bg.jpg" title="Contact"/>
    <div className="py-16 md:py-32 bg-blue px-2">
        <section className="container mx-auto text-white">
            <div className="flex flex-wrap leading-loose text-sm">
                <div className="w-full md:w-1/4 mb-5 md:mb-0">
                    <h2 className="text-4xl font-medium uppercase mb-5">Contact Us</h2>
                    <p className="mb-5">If you have any questions or would like to reach out to Gelos Healthcare, please fill out the form to the right and a member of the team will get back to you as soon as possible.</p>
                    Gelos Healthcare<br/>
                    2 Long Road<br/>
                    Mistley, Manningtree<br/>
                    Essex, CO11 2HN<br/><br/>
                    <b>T:</b> 020 7117 2490
                </div>
                <div className="w-full md:w-3/4 md:pl-10">
                    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                        <input type="hidden" name="bot-field" />
                        <p>
                            <label>Full Name: <input placeholder="E.G John Smith…" className="w-full p-4 mb-2 contactinput-bg" type="text" name="name" /></label>   
                        </p>
                        <p>
                            <label>Email: <input placeholder="E.G Johnsmith@gmail…" className="w-full p-4 mb-2 contactinput-bg" type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Phone: <input placeholder="E.G 01234 556 677" className="w-full p-4 mb-2 contactinput-bg" type="number" name="phone" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea placeholder="Message…" className="w-full p-4 mb-2 contactinput-bg" rows="5" name="message"></textarea></label>
                        </p>
                        <p>
                            <button className="bg-yellow px-16 py-4 shadow" type="submit">Submit Message</button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    </div>
  </Layout>
);
