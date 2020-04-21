import React from "react"
import Image from '../Image';

const ServiceSnippet = (props) => {
  let layout;
  if (props.imagePosition.toLowerCase() === 'left') {
    layout =
    <section className="container mx-auto flex flex-wrap text-white pb-32 items-center">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <Image alt="Investment" filename={props.image} />
      </div>
      <div className="w-full md:w-1/2 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-medium uppercase mb-5">{props.title}</h2>
          <p className="leading-loose text-sm">{props.text}</p>
          <div className="flex flex-wrap items-center justify-center text-sm text-blue-900"><Image classes="w-32 mx-4" alt="Investment" filename={props.logo} /> <span className="opacity-75">{props.logoText}</span></div>
      </div>
    </section>
  } else if (props.imagePosition.toLowerCase() === 'right') {
    layout =
    <section className="container mx-auto flex flex-wrap text-white mb-32 items-center">
      <div className="w-full md:w-1/2 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-medium uppercase mb-5">{props.title}</h2>
          <p className="leading-loose text-sm">{props.text}</p>
          <div className="flex flex-wrap items-center justify-center"><Image classes="w-32" alt="Investment" filename={props.logo} /> {props.logoText} </div>

      </div>
      <div className="order-first md:order-none w-full md:w-1/2 mb-10 md:mb-0">
        <Image alt="Investment" filename={props.image} />
      </div>
    </section>
  }

  return layout
}




export default ServiceSnippet
