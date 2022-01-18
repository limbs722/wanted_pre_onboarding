import React from 'react';
import { Slider } from './';

const Main = () => {
  return (
    <>
      <main className='Main_Main'>
        <div className='TopBanner_TopBanner'>
          <Slider />
          {/* <button className='TopBanner_arrow_TopBanner_nextArrow' aria-label='nextArrowButton'>

          </button>
          <button className='TopBanner_arrow_TopBanner_prevArrow' aria-label='prevArrowButton'>
            
          </button> */}
        </div>
      </main>
    </>
  );
};

export default Main;