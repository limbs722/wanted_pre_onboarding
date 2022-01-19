import React from 'react';
import Slider from 'react-slick';
import { CARD_DATA } from '../utils/CardDataSet';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/Main.scss';

const Main = () => {
  const setting = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  }

  const bannerList = CARD_DATA.map(item => {
    return <>
            <div className='banner-image'>
              <a href={item.link}>
                <img className='item-image' alt={item.title} src={item.imgSrc} />
              </a>
            </div>
            <div className='item-info'>
              <h2>{item.title}</h2>
              <h3>{item.subTitle}</h3>
              <hr className='item-divider'/>
              <a href={item.link}>
                <span>바로가기</span>
              </a>
            </div>
          </>
  })

  return (
    <>
      <main className='Main_Main'>
        <div className='TopBanner_TopBanner'>
          <Slider {...setting}>
            {bannerList}
          </Slider>
        </div>
        <button type='button' className='nextArrow' aria-label='nextArrowButton'></button>
        <button type='button' className='nextArrow' aria-label='nextArrowButton'></button>
      </main>
    </>
  );
};

export default Main;