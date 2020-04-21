import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import ServiceSnippet from '../components/Services/ServiceSnippet';
import SEO from '../components/Seo'


export default () => (
  <Layout>
    <SEO 
      title="Services" 
      description="Gelos Healthcare Limited is a specialist healthcare development and investment business which offers partners a rarely found end-to-end service creating sustainable investment into the UK health and social care market. Gelos Healthcare Limited are able to support clients through the development process, from land assembly and acquisition, managing and financing planning permission, through development management to practical completion and into the operation and investment phase."
      keywords="Healthcare, Healthcare Investing, Investing, Healthcare Development, Healthcare Partnerships"
    />
    <Hero image="services-bg.jpg" title="Our Services"/>
    <div className="pt-16 md:pt-32 bg-blue px-2">
        <section className="container max-w-5xl mx-auto text-white mb-24 md:mb-40">
            <h2 className="text-center text-3xl font-medium uppercase mb-10">Gelos Healthcare</h2>
            <div className="flex flex-wrap leading-loose text-sm">
                <div className="w-full md:w-1/2 md:pr-3 mb-5 md:mb-0">
                    Gelos Healthcare Limited is a specialist healthcare development and investment business which offers partners a rarely found end-to-end service creating sustainable investment into the UK health and social care market. Gelos Healthcare Limited are able to support clients through the development process, from land assembly and acquisition, managing and financing planning permission, through development management to practical completion and into the operation and investment phase.
                </div>
                <div className="w-full md:w-1/2 md:pl-3">
                    The founders of Gelos Healthcare Limited bring a combined 50 years experience in development, investment and healthcare operations. Gelos Healthcare Limited is committed to maximising the financial and social  impact of each and every investment opportunity in the healthcare market including care homes, assisted living accommodation, Chidrens day nurseries and specialist medical facilities and works with clients of all sizes at any stage of the development and investment cycle.               
                </div>
            </div>
        </section>
        <ServiceSnippet 
            imagePosition="left"
            image="investment.jpg"
            title="Investment" 
            logo="cbre.png"
            logoText="CBRE are retained advisors"
            text="Gelos Healthcare is able to work with partners on a range of bases. We can help operators unlock investment opportunities through real estate financing, from long income structures, sale and leaseback of manage back to traditional joint venture arrangements with complete alignment and risk sharing. We are able to bring our considerable financial experience to create value through sustainable long-term strategies to enhance the health and social care offering within local markets."
        />
        <ServiceSnippet 
            imagePosition="right"
            image="development.jpg"
            title="Development" 
            text="Gelos Healthcare offers the ability to deliver a turnkey care home designed and developed by the most respected companies in the industry. We can offer a full service from ground up or work alongside the clients preferred developer to make sure of a perfect end product matching the operator’s expectations. 
            Gelos will use it’s 30 years of care home operational experience to ensure that the design and development is fully CQC compliant and future proofed against changing regulations. 
            Gelos prides itself on designing Eco sustainable environments which not only save the operator costs, but work efficiently for clients and staff equally."
        />
        <ServiceSnippet 
            imagePosition="left"
            image="partnerships.jpg"
            title="Partnerships" 
            text="Gelos Helathcare Management Ltd has been created to operate our new state of the art, 21st century care environments. With 60 years of management experience we provide a fully compliant service to provide our clients with the best possible care at the most cost effective price.  
            Our experienced Management teams ensure that all our services comply with the Care Act 2014, the Care Standards Act 2000 and the Care Home Regulations 2001, which are registered with and inspected by the Care Quality Commission. 
            Our dedicated staff receive the best training by our own qualified trainers to deliver CPD accredited courses, ensuring the highest standards of care are achieved. From our chefs and waiting staff to our domestic and maintenance team, we ensure that our cohesive teams deliver a 5 star service to all our clients. 
            Our aim is to develop and maintain a warm, caring homely environment that aims to meet the individual needs of residents as well as providing the opportunity for residents to achieve maximum independence. 
            Our core values ensure the rights of residents as individuals to privacy, freedom of choice and the opportunity for personal expression is paramount."
        />
    </div>
  </Layout>
);
