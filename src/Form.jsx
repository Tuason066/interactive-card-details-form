import React from 'react';

function Form() {
  return (
    <form className='pt-formTop pb-10 xl:flex xl:flex-col xl:items-center xl:justify-center xl:pl-72 xl:max-w-[650px]'>
      <div className='w-11/12 mx-auto'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='text-violet-300 uppercase tracking-widest text-cardSM pb-1 block'
          >
            cardholder name
          </label>
          {/* bg-gradient-to-r from-[#6448fe] to-[#600594] p-[2px]  */}
          <div>
            <div className='border-2 border-violet-100 rounded text-cardMD'>
              <input
                id='name'
                type='text'
                placeholder='e.g. Jane Appleseed'
                className='w-full px-[1em] py-[.5em] text-violet-200 border-none outline-none bg-white rounded'
              />
            </div>
            <p className='text-[.65rem] text-red  mt-1'>Enter your name</p>
          </div>
        </div>
        <div className='mb-4'>
          <label
            htmlFor='number'
            className='text-violet-300 uppercase tracking-widest text-cardSM pb-1 block'
          >
            card number
          </label>
          {/* border-red */}
          <div>
            <div className='border-2  border-violet-100 rounded'>
              <input
                id='number'
                type='text'
                placeholder='e.g. 1234 5678 9123 0000'
                className='w-full px-[1em] py-[.5em] text-violet-200 border-none outline-none bg-transparent text-cardMD'
              />
            </div>
            <p className='text-[.65rem] text-red  mt-1'>
              Wrong format, numbers only
            </p>
          </div>
        </div>
        <div className='mb-6'>
          <label
            htmlFor='month'
            className='text-violet-300 uppercase tracking-widest text-cardSM pb-1 block'
          >
            exp. date (mm/yy) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cvc
          </label>
          {/* month year cvc */}
          <div className='grid grid-cols-4 gap-2'>
            <div>
              <div className='border-2 border-violet-100 rounded'>
                <input
                  id='month'
                  type='text'
                  placeholder='MM'
                  className='w-full px-[1em] py-[.5em] text-violet-200 border-none outline-none bg-transparent text-cardMD'
                />
              </div>
              <p className='text-[.65rem] text-red  mt-1'>Can't be blank</p>
            </div>

            <div>
              <div className='border-2 border-violet-100 rounded'>
                <input
                  id='year'
                  type='text'
                  placeholder='YY'
                  className='w-full px-[1em] py-[.5em] text-violet-200 border-none outline-none bg-transparent text-cardMD'
                />
              </div>
              <p className='text-[.65rem] text-red  mt-1'>Can't be blank</p>
            </div>
            <div className='col-span-2'>
              <div className='border-2 border-violet-100 rounded'>
                <input
                  id='cvc'
                  type='text'
                  placeholder='e.g. 123'
                  className='w-full px-[1em] py-[.5em] text-violet-200 border-none outline-none bg-transparent text-cardMD'
                />
              </div>
              <p className='text-[.65rem] text-red  mt-1'>Can't be blank</p>
            </div>
          </div>
        </div>
      </div>
      <button
        type='submit'
        className='capitalize bg-violet-300 text-cardMD text-white block w-11/12 mx-auto py-[.5em] rounded-md'
      >
        confirm
      </button>
    </form>
  );
}

export default Form;
