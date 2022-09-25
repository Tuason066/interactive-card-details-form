import React from 'react';

function ThankYou({ setIsSubmitted, setPerson }) {
  return (
    <article className='text-center pt-formTop pb-10 xl:flex xl:flex-col xl:items-center xl:justify-center xl:pl-72 xl:max-w-[650px]'>
      <div>
        <div className='max-w-[4rem] lg:max-w-[15rem] mx-auto mb-8'>
          <img
            className='lg:w-[50%] inline'
            src='./images/icon-complete.svg'
            alt='check icon'
          />
        </div>
        <h2 className='uppercase text-violet-300 text-lg tracking-[.3em]'>
          Thank you
        </h2>
        <p className='text-violet-200 text-sm md:text-md mt-ty1 mb-ty8'>
          We've added your card details
        </p>
        <button
          type='submit'
          className='primary-btn'
          onClick={() => {
            setIsSubmitted(false);
            setPerson({
              name: '',
              num: '',
              month: '',
              year: '',
              cvc: '',
            });
          }}
        >
          continue
        </button>
      </div>
    </article>
  );
}

export default ThankYou;
