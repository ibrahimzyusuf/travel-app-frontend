import React from 'react'
import SectionHead from '../../Components/SectionHead/SectionHead'
import Button from '../../Components/Button/Button'
import bg_style from "../../assets/images/bg_style.webp";
import border from "../../assets/images/border.png";
import promotion from "../../assets/images/promotion.webp";
import youtube_img from "../../assets/images/youtube_img.webp";
import youtube from "../../assets/images/youtube.png";
import trend from "../../assets/images/trend.webp";
import Hero from "../../Components/Hero/Hero";
import about_hero from "../../assets/images/about_hero.webp";
import Footer from '../../Components/Footer/Footer';


const About = () => {
  return (
    <div className='about'>
      <header className='w-full relative'>
        <Hero hero_bg={about_hero} hero_title='About Us' hero_class={'font-Yester font-normal text-5xl sm:text-6xl md:text-8xl text-white mx-auto my-auto'} />
      </header>
      <section className='promotion w-full'>
        <div className="promotion_container relative w-11/12 mt-16 mx-auto md:flex items-center ">
          <div className="left absolute md:relative w-full md:w-1/2 z-10 flex flex-col items-start gap-5 text-xs">
            <SectionHead sec_title='PROMOTION' sec_subtitle='We Provide You Best Europe Sightseeing Tours' sec_class={'font-Pop font-bold text-2xl md:text-3xl text-black2'} />
            <p className='mt-5 font-Pop font-normal text-base text-black1'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium 
              a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla 
              qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
            <Button btn_title='View Packages'/>
          </div>
          <div className="right relative w-full md:w-1/2 z-0 h-104 flex items-center justify-center opacity-75 md:opacity-100 mx-auto ">
            <img src={bg_style} alt="" className='w-101 h-101 absolute' loading='lazy' />
            <img src={border} alt="" className='w-101 h-102 absolute' loading='lazy' />
            <img src={promotion} alt="" className='w-98 h-103 absolute' loading='lazy' />
          </div>
        </div>
        
      </section>
      <section className="youtube w-full">
        <div className="youtube_container mt-18 w-full h-103 relative flex items-center justify-center bg-cover" style={{backgroundImage:`url(${youtube_img})`}}>
          <h1 className='absolute font-Yester font-normal text-6xl sm:text-8xl md:text-10xl text-white'>Wanderlust</h1>
          <img src={youtube} alt="youtube" className='absolute w-20 md:w-24 h-20 md:h-24' loading='lazy' />
        </div>
      </section>
      <section className="trend w-full">
        <div className="trend_container w-11/12 mx-auto my-16 flex relative">
          <div className="left absolute md:relative w-full md:w-1/2 z-0 opacity-65 md:opacity-100">
            <img src={trend} alt="" className='w-98 h-96' loading='lazy' />
          </div>
          <div className="right relative w-full md:w-1/2 flex flex-col items-start gap-6">
            <SectionHead sec_title='TREND' sec_subtitle='Our Popular Tour Plans' sec_class={'font-Pop font-bold text-2xl md:text-3xl text-black2'}/>
            <p className='font-Pop font-normal text-base text-black1'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
              Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.</p>
            <div className="statistics mt-5 flex gap-8 font-Pop">
              <div className="vacations flex flex-col items-center gap-5">
                <span className='font-normal text-2xl md:text-3xl text-gray1'>78%</span>
                <h1 className='font-bold text-base md:text-lg text-black2'>VACATIONS</h1>
              </div>
              <div className="honeymoon flex flex-col items-center gap-5">
                <span className='font-normal text-2xl md:text-3xl text-gray1'>55%</span>
                <h1 className='font-bold text-base md:text-lg text-black2'>HONEYMOON</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About