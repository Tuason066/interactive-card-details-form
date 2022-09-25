import React from 'react';

function Cards({ name, num, month, year, cvc }) {
  /* 0000 0000 0000 0000 */

  /* substring */
  const checkNum = (num) => {
    const text = num.toString();
    if (!text) {
      return '0000 0000 0000 0000';
    }
    /* 0000 */
    if (num.length === 1) {
      return `${text}000 0000 0000 0000`;
    }
    if (num.length === 2) {
      return `${text}00 0000 0000 0000`;
    }
    if (num.length === 3) {
      return `${text}0 0000 0000 0000`;
    }
    if (num.length === 4) {
      return `${text} 0000 0000 0000`;
    }
    /* space */
    if (num.length === 5) {
      return `${text.substring(0, 5)}0000 0000 0000`;
    }
    /* 0000 0000 */
    if (num.length === 6) {
      return `${text.substring(0, 5)}${text.substring(5, 6)}000 0000 0000`;
    }
    if (num.length === 7) {
      return `${text.substring(0, 5)}${text.substring(5, 7)}00 0000 0000`;
    }
    if (num.length === 8) {
      return `${text.substring(0, 5)}${text.substring(5, 8)}0 0000 0000`;
    }
    if (num.length === 9) {
      return `${text.substring(0, 5)}${text.substring(5, 9)} 0000 0000`;
    }
    /* space */
    if (num.length === 10) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}0000 0000`;
    }
    /* 0000 0000 0000*/

    if (num.length === 11) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        11
      )}000 0000`;
    }
    if (num.length === 12) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        12
      )}00 0000`;
    }
    if (num.length === 13) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        13
      )}0 0000`;
    }
    if (num.length === 14) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        14
      )} 0000`;
    }
    /* space */
    if (num.length === 15) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        15
      )}0000`;
    }
    /* 0000 0000 0000 0000*/
    if (num.length === 16) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        15
      )}${text.substring(15, 16)}000`;
    }
    if (num.length === 17) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        15
      )}${text.substring(15, 17)}00`;
    }
    if (num.length === 18) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        15
      )}${text.substring(15, 18)}0`;
    }
    if (num.length === 19) {
      return `${text.substring(0, 5)}${text.substring(5, 10)}${text.substring(
        10,
        15
      )}${text.substring(15, 19)}`;
    }
  };

  const checkCvc = (cvc) => {
    const text = cvc.toString();

    if (text.length == 1) {
      return `${text.substring(0, 1)}00`;
    } else if (text.length == 2) {
      return `${text.substring(0, 2)}0`;
    } else {
      return text;
    }
  };

  return (
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
          <p className='cardOne-text'>{checkCvc(cvc) || '000'}</p>
          <img src='./images/bg-card-back.png' alt='card back view' />
        </div>
      </div>
      {/* card 2 */}
      <div className='cardTwo-container'>
        <div className='relative'>
          <img
            className='cardTwo-logo absolute top-[8%] left-[6%] w-[15%]'
            src='./images/card-logo.svg'
            alt='card logo'
          />
          <img src='./images/bg-card-front.png' alt='card front view' />
          <p className='cardTwo-number'>{checkNum(num)}</p>
          <p className='cardTwo-name'>{name ? name : 'Jane Appleseed'}</p>
          <p className='cardTwo-date'>
            {month ? `${month < 10 ? `0${month}` : month}` : '00'}/
            {year ? `${year < 10 ? `0${year}` : year}` : '00'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
