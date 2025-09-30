import React from 'react'
import {packages_cards} from "../../data";
import PackagesCard from '../../Components/PackagesCard/PackagesCard';
import Hero from "../../Components/Hero/Hero";
import packages_hero from "../../assets/images/packages_hero.webp";
import Footer from "../../Components/Footer/Footer";

const Packages = () => {
  return (
    <div className='packages'>
      <header className='w-full relative '>
        <Hero hero_bg={packages_hero} hero_title='Travel With Us' hero_class={'font-Yester font-normal text-5xl sm:text-6xl md:text-8xl mx-auto my-auto  text-white'} />
      </header>
      <section className="trips w-full">
        <div className="packagescards_container w-11/12 mt-16 mb-20 mx-auto flex flex-wrap gap-5">
          {
            packages_cards.map(element=>{
              return(
                <PackagesCard card_img={element.card_img} card_date={element.card_date} card_visitors={element.card_visitors}
                card_title={element.card_title} card_desc={element.card_desc} card_price={element.card_price} card_rate={element.card_rate}/>
              )
            })
          }
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Packages