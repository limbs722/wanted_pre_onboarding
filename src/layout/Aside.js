import React from 'react';
import { ICON_BELL, ICON_SEARCH } from '../utils/image';
import '../assets/css/Aside.scss';

const Aside = () => {
  return (
    <>
      <aside className='Aside_className isLoggedIn'>
        <ul>
          <li>
            <button type='button' aria-label='searchButton' className='searchButton' data-attribute-id='gnb' data-gnb-kind='search'>
              <img src={ICON_SEARCH} alt='search icon' />
            </button>
          </li>
          <li className=''>
            <button type='button' aria-label='notiButton' className='notiButton' data-attribute-id='gnb' data-gnb-kind='bell'>
              <img src={ICON_BELL} alt='bell icon' />
            </button>
          </li>
          <li className='mdMoreVisible profileBox'>
            <button tpye='button' data-attribute-id='gnb' data-gnb-kind='photo' className='profileButton'
                    aria-label='avatarButton' data-badge='false'>
              <div className='avatarBorder'>
                <div className='avatarImage' 
                    style={{ backgroundImage: 'url(https://static.wanted.co.kr/images/profile_default.png)' }}/>
              </div>
            </button>
          </li>
          <li className='mdMoreVisible leftDivision' data-attribute-id='gnb' data-gnb-kind='forEmployers'>
            <a className='dashboardButton' href='/dashboard'>기업 서비스</a>
          </li>
          <li className='Aside_visibleMenu'>
            <button className='menuButton' aria-label='menuButton' type='button' data-attribute-id='gnb' data-gnb-kind='more'>
              <svg width='18' height='18' xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <path d='M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z' id='a'>
                  </path>
                </defs>
                <g fill='none' fillRule='evenodd'>
                  <mask id='b' fill='#fff'>
                    <use xlinkHref='#a'></use>
                    </mask><use fill='#333' xlinkHref='#a'></use>
                    <g mask='url(#b)' fill='#333'><path d='M0 0h18v18H0z'></path></g></g>
              </svg>
            </button>
          </li>
        </ul>
        <div className='Aside_visibleMenu'/>
      </aside>
    </>
  );
};

export default Aside;