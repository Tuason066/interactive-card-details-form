import React from 'react';

function Form({ person, setPerson, handleSubmit, err }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const { name, num, month, year, cvc } = person;

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='w-11/12 mx-auto'>
        <div className='mb-4'>
          <label htmlFor='name' className='form-label'>
            cardholder name
          </label>
          {/* bg-gradient-to-r from-[#6448fe] to-[#600594] p-[2px]  */}
          <div>
            <div className='input-wrapper'>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='e.g. Jane Appleseed'
                // className='nameInput'
                className={`${
                  err.name === 'submit' || err.name === null
                    ? 'form-input'
                    : 'form-input-err'
                }`}
                value={name}
                onChange={handleChange}
              />
            </div>
            <p className={`error ${err.name === 'submit' ? 'hidden' : ''}`}>
              {err.name !== 'submit' && err.name}
            </p>
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='number' className='form-label'>
            card number
          </label>
          {/* border-red */}
          <div>
            <div className='input-wrapper'>
              <input
                id='number'
                name='num'
                type='text'
                placeholder='e.g. 1234 5678 9123 4567'
                className={`${
                  err.num === 'submit' || err.num === null
                    ? 'form-input'
                    : 'form-input-err'
                }`}
                maxLength='19'
                value={num}
                onChange={handleChange}
              />
            </div>
            <p className={`error ${err.num === 'submit' ? 'hidden' : ''}`}>
              {err.num !== 'submit' && err.num}
            </p>
          </div>
        </div>
        <div className='mb-6'>
          <label htmlFor='month' className='form-label '>
            exp. date (mm/yy) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cvc
          </label>
          {/* month year cvc */}
          <div className='grid grid-cols-4 gap-2'>
            <div>
              <div className='input-wrapper'>
                <input
                  id='month'
                  name='month'
                  type='text'
                  placeholder='MM'
                  className={`text-center ${
                    err.month === 'submit' || err.month === null
                      ? 'form-input'
                      : 'form-input-err'
                  }`}
                  maxLength='2'
                  value={month}
                  onChange={handleChange}
                />
              </div>
              <p className={`error ${err.month === 'submit' ? 'hidden' : ''}`}>
                {err.month !== 'submit' && err.month}
              </p>
            </div>
            <div>
              <div className='input-wrapper'>
                <input
                  id='year'
                  name='year'
                  type='text'
                  placeholder='YY'
                  className={`text-center ${
                    err.year === 'submit' || err.year === null
                      ? 'form-input'
                      : 'form-input-err'
                  }`}
                  maxLength='2'
                  value={year}
                  onChange={handleChange}
                />
              </div>
              <p className={`error ${err.year === 'submit' ? 'hidden' : ''}`}>
                {err.year !== 'submit' && err.year}
              </p>
            </div>
            <div className='col-span-2'>
              <div className='input-wrapper'>
                <input
                  id='cvc'
                  name='cvc'
                  type='text'
                  placeholder='e.g. 123'
                  className={`${
                    err.cvc === 'submit' || err.cvc === null
                      ? 'form-input'
                      : 'form-input-err'
                  }`}
                  maxLength='3'
                  value={cvc}
                  onChange={handleChange}
                />
              </div>
              <p className={`error ${err.cvc === 'submit' ? 'hidden' : ''}`}>
                {err.cvc !== 'submit' && err.cvc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button type='submit' className='primary-btn'>
        confirm
      </button>
    </form>
  );
}

export default Form;
