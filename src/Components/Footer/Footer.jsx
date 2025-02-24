import React from 'react'
import {Link,NavLink} from "react-router-dom";
import footer_img from "../../assets/images/footer_img.png";
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div className='footer mt-16 w-full flex flex-col items-center bg-no-repeat bg-right text-black1' style={{backgroundImage:`url(${footer_img})`}}>
        <div className="up w-11/12 mx-auto flex items-start justify-between">
            <div className="left w-3/12 flex flex-col gap-5 ">
                <Logo/>
                <p className='mt-3 font-Pop font-medium text-sm sm:text-base '>Travel helps companies manage payments easily.</p>
                <div className="brands flex gap-3 text-red-500">
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-infinity"></i>
                </div>
            </div>
            <div className="middle w-3/12 flex flex-col gap-5">
                <h1 className='font-Pop font-bold text-base sm:text-xl '>Company</h1>
                <ul className='flex flex-col gap-3 font-Pop font-medium text-sm sm:text-base '>
                    <Link to='#'><li>About Us</li></Link>
                    <Link to='#'><li>Careers</li></Link>
                    <Link to='#'><li>Blog</li></Link>
                    <Link to='#'><li>Pricing</li></Link>
                </ul>
            </div>
            <div className="right w-3/12 flex flex-col gap-5">
                <h1 className='font-Pop font-bold text-base sm:text-xl '>Destinations</h1>
                <ul className='flex flex-col gap-3 font-Pop font-medium text-sm sm:text-base '>
                    <Link to='#'><li>Maldives</li></Link>
                    <Link to='#'><li>Los Angelas</li></Link>
                    <Link to='#'><li>Las Vegas</li></Link>
                    <Link to='#'><li>Torronto</li></Link>
                </ul>
            </div>
        </div>
        <div className="buttom mt-16">
            <p className="copyright font-Pop font-medium text-sm ">Copyright @ Xpro 2023 All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer