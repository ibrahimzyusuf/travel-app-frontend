import React from 'react'
import Hero from '../../Components/Hero/Hero';
import home_hero from "../../assets/images/home_hero.webp";
import SectionHead from '../../Components/SectionHead/SectionHead';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import ExploreCard from '../../Components/ExploreCard/ExploreCard';
import TrendyCard from '../../Components/TrendyCard/TrendyCard';
import { category_cards,explore_cards,trendy_cards } from "../../data";
import Footer from '../../Components/Footer/Footer';

const Home = () => {
 
  return (
    <div>
      <header className='w-full relative '>
        <Hero hero_bg={home_hero} hero_title='No matter where you’re going to, we’ll take you there' hero_class={'font-Pop font-normal text-3xl  text-black1 w-3/5 mx-auto my-auto md:text-5xl'} />
      </header>

      <section className='category w-full text-center'>
        <SectionHead sec_title='CATEGORY' sec_subtitle='We Offer Best Services' sec_class={'font-Pop font-bold text-4xl text-black2 md:text-5xl'} />
        <div className="categorycards_container w-11/12 mx-auto flex justify-between items-center flex-wrap">
          {
            category_cards.map(element=>{
              return(
                <CategoryCard categorycard_img={element.categorycard_img} 
                categorycard_title={element.categorycard_title}
                categorycard_description={element.categorycard_description}/>
              )
            })
          }
        </div>
      </section>
      <section className="explore w-full">
        <div className="explorecards_container mt-14 flex flex-wrap md:flex-nowrap gap-3 lg:gap-6">
          {explore_cards.map(element=>{
            return(
              <ExploreCard explorecard_bg_img={element.explorecard_bg_img} 
              explorecard_title={element.explorecard_title} />
            )
          })}
        </div>
      </section>
      <section className="trendy w-full text-center">
      <SectionHead sec_title='TRENDY' sec_subtitle='Our Trending Tour Packages' sec_class={'font-Pop font-bold text-4xl text-black2 md:text-5xl'} />
      <div className="trendycards_container w-11/12 mx-auto flex justify-between flex-wrap">
          {
            trendy_cards.map(element=>{
              return(
                <TrendyCard trendycard_img={element.trendycard_img} trendycard_logo={element.trendycard_logo}
                trendycard_days={element.trendycard_days} trendycard_users={element.trendycard_users}
                trendycard_title={element.trendycard_title} trendycard_description={element.trendycard_description}/>
              )
            })
          }
      </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home