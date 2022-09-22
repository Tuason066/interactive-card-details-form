import React from 'react';

function Cards() {
  return (
    /* max-w-xs border-2 border-green-500 */
    <div className='relative'>
      <picture>
        {/* 483 x 900 */}
        <source
          media='(min-width: 1280px)'
          srcSet='./images/bg-main-desktop.png'
        />
        {/* 375 x 240 */}
        <img
          src='./images/bg-main-mobile.png'
          alt='Flowers'
          style={{ width: 'auto' }}
        />
      </picture>
      {/* card 1 */}
      <div className='cardOne-container'>
        <div className='relative'>
          <p className='cardOne-text'>000</p>
          <img src='./images/bg-card-back.png' alt='card back view' />
        </div>
      </div>
      {/* card 2 */}
      <div className='cardTwo-container'>
        <div className='relative'>
          <img
            className='cardTwo-logo'
            src='./images/card-logo.svg'
            alt='card logo'
          />
          <img src='./images/bg-card-front.png' alt='card front view' />
          <p className='cardTwo-number'>0000 0000 0000 0000</p>
          <p className='cardTwo-name'>jane appleseed</p>
          <p className='cardTwo-date'>00/00</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
