import React from 'react';

const SliderItem = attr => {

  return (
    <div className='slick-slide-item' key={attr.idx}>
      <div>
        <img className='item-image' alt={attr.title} src={attr.imgSrc} />
      </div>
      <div className='item-info'>
        <h2>{attr.title}</h2>
        <h3>{attr.subTitle}</h3>
        <hr className='item-divider'/>
        <a href={attr.link}>
          <span>바로가기</span>
        </a>
      </div>
    </div>
  );
};

export default SliderItem;