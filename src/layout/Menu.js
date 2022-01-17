import React from 'react';
import '../assets/css/Menu.scss';

const Menu = () => {
  return (
    <>
      <ul className='Menu_className'>
        <li className='xsHomeButton xsOnly selectedNav' data-attribute-id='gnb' data-gnb-kind='home'>
          <a href='/' className='' aria-label=''>홈</a></li>
        <li className='' data-attribute-id='gnb' data-gnb-kind='jobs'>
          <a href='/jobsfeed' className='' aria-label=''>채용</a></li>
        <li className='' data-attribute-id='gnb' data-gnb-kind='event'>
          <a href='/events' className='' aria-label=''>이벤트</a></li>
        <li className='smMoreVisible' data-attribute-id='gnb' data-gnb-kind='salary'>
          <a href='/salary' className='' aria-label=''>직군별 연봉</a></li>
        <li className='smMoreVisible' data-attribute-id='gnb' data-gnb-kind='resume'>
          <a href='/cv' className='' aria-label=''>이력서</a></li>
        <li className='smMoreVisible' data-attribute-id='gnb' data-gnb-kind='community'>
          <a href='/community' className='' aria-label=''>
            커뮤니티
            <em></em>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;