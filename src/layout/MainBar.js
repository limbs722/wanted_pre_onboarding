import React from 'react';
import { Menu } from './';
import { ICON_MENU } from '../utils/image';
import '../assets/css/MainBar.scss'

const MainBar = () => {
  return (
    <div role='presentation' className='NavBar' style={{ position: 'fixed', paddingRight: 'initial' }}>
      <div className='MainBar_MainBar isLoggedIn' role='presentation'>
        <nav className='MainBar_MainBar_nav'>
          <div className='MainBar_MainBar_nav_top'>
            <div className='MainBar_MainBar_nav_top_logo'>
              <button type='button' aria-label='jobCategoryMenuButton' data-attribute-id='gnb'
                      data-gnb-kind='jobCategoryMenu' className='MainBar_hamberger'>
                <img src={ICON_MENU} alt='hamberger menu'
                    style={{ width: '17px', height: '14px', objectFit: 'contain' }}/>
              </button>
              <a href='/' className='MainBar_MainBar_logo' aria-label='homeLink' data-attribute-id='gnb'
                  data-gnb-kind='home'>
                <i className='icon-logo_new'/>
              </a>
            </div>
            <button id='gnbSignupBtn' className='xsSignUpButton isLoggedIn' type='button'
                    data-attribute-id='gnb' data-gnb-kind='singupLogin'>회원가입하기</button>
          </div>
          <Menu/>
        </nav>
      </div>
    </div>
  );
};

export default MainBar;