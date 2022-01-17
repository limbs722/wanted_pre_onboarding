import React from 'react';
import '../assets/css/Menu.scss';

const Menu = () => {
  const svgAttr = textType => {
    return <>
      <svg xmlns='http://www.w3.org/2000/svg' width={18} height={11} viewBox='0 0 18 11'>
        <g fill='none' fillRule='evenodd' fontFamily='AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo'
            fontSize={9} fontWeight={500}>
          <g fill='#36F'><g><g><g><g><g><g>
            <text transfrom='translate(-931, -13) translate(224, 7) translate(210, 6) translate(350, 0) translate(147, 0)'>
              <tspan x='0' y='8'>{textType}</tspan>
            </text>
          </g></g></g></g></g></g></g></g>
      </svg>
    </>
  }

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
            커뮤니티<em>{svgAttr('New')}</em></a></li>
        <li className='smMoreVisible' data-attribute-id='gnb' data-gnb-kind='freelancer'>
          <a href='https://www.wanted.co.kr/gigs/experts' className='' aria-label='' target='_blank'
            rel='noopener noreferrer'>프리랜서</a></li>
        <li className='smMoreVisible' data-attribute-id='gnb' data-gnb-kind='aiScore'>
          <a href='/aiscore/resume' className='' aria-label=''>
            AI 합격예측<span>{svgAttr('Beta')}</span></a></li>
      </ul>
    </>
  );
};

export default Menu;