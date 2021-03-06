import React, { useCallback, useRef } from 'react';
import Slider from 'react-slick';
import { CARD_DATA } from '../utils/CardDataSet';
import { useWindowSize } from '../hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/Main.scss';

const Main = () => {
  const slickRef = useRef(null);
  const currentWindowSize = useWindowSize();

  const setting = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  }

  const prevClick = useCallback(() => slickRef.current.slickPrev(), []);
  const nextClick = useCallback(() => slickRef.current.slickNext(), []);

  const maxWidthSize = (currentWindowSize.width - 80) > 1060 ? 1060 : (currentWindowSize.width - 80)

  const bannerList = CARD_DATA.map(item => {
    return <div key={item.idx} style={{ width: maxWidthSize }} className={`${item.idx}`}>
            <div className='banner-image'>
              <a href={item.link}>
                <img className='item-image' alt={item.title} src={item.imgSrc} />
              </a>
            </div>
            <div className='item-info'>
              <h2>{item.title}</h2>
              <h3>{item.subTitle}</h3>
              <hr className='item-divider'/>
              <a href={item.link} className='info-directButton'>
                <span className='Button_label'>
                  바로가기
                  <span className='Button_endIcon'>
                    <span className="SvgIcon">
                      <svg className="SvgIcon_SvgIcon" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"/>
                      </svg>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
  })

  return (
    <>
      <main className='Main_Main'>
        <div className='TopBanner_TopBanner'>
          <Slider ref={slickRef} {...setting}>
            {bannerList}
          </Slider>
          {
            currentWindowSize.width >= 1200 ?
            <>
              <button type='button' className='TopBanner_arrow nextArrow' onClick={nextClick} aria-label='nextArrowButton'>
                <span className="SvgIcon">
                  <svg className="SvgIcon_SvgIcon" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"/>
                  </svg>
                </span>
              </button>
              <button type='button' className='TopBanner_arrow prevArrow' onClick={prevClick} aria-label='prevArrowButton'>
                <span className="SvgIcon">
                  <svg className="SvgIcon_SvgIcon" viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"/>
                  </svg>
                </span>
              </button>
            </>
            :
            <></>
          }
        </div>
      </main>
    </>
  );
};

export default Main;