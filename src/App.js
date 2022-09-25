import { useState } from 'react';
import Cards from './Cards';
import Form from './Form';
import ThankYou from './ThankYou';

function App() {
  const [person, setPerson] = useState({
    name: '',
    num: '',
    month: '',
    year: '',
    cvc: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  let isError = {
    name: null,
    num: null,
    month: null,
    year: null,
    cvc: null,
  };
  const [err, setErr] = useState(isError);

  const checkingText = (value, obj) => {
    if (!value) {
      isError = { ...isError, [obj]: "Can't be blank" };
    } else if (/[^a-z\s]/gi.test(value)) {
      isError = { ...isError, [obj]: 'Wrong format, letters only' };
    } else {
      isError = { ...isError, [obj]: 'submit' };
    }
  };
  const checkingNum = (value, obj) => {
    if (obj === 'num') {
      if (!value) {
        isError = { ...isError, [obj]: "Can't be blank" };
      } else if (!/(\d{4}\s){3}\d{4}$/g.test(value)) {
        isError = { ...isError, [obj]: 'Wrong format, numbers only' };
      } else {
        isError = { ...isError, [obj]: 'submit' };
      }
    } else if (obj === 'cvc') {
      if (!value) {
        isError = { ...isError, [obj]: "Can't be blank" };
      } else if (!/\d{3}/g.test(value)) {
        isError = { ...isError, [obj]: 'Wrong format, numbers only' };
      } else {
        isError = { ...isError, [obj]: 'submit' };
      }
    } else {
      if (!value) {
        isError = { ...isError, [obj]: "Can't be blank" };
      } else if (/[^\d]/g.test(value)) {
        isError = { ...isError, [obj]: 'Wrong format, numbers only' };
      } else {
        isError = { ...isError, [obj]: 'submit' };
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, num, month, year, cvc } = person;
    checkingText(name, 'name');
    checkingNum(num, 'num');
    checkingNum(month, 'month');
    checkingNum(year, 'year');
    checkingNum(cvc, 'cvc');

    setErr(isError);

    if (
      isError.name === 'submit' &&
      isError.num === 'submit' &&
      isError.month === 'submit' &&
      isError.year === 'submit' &&
      isError.cvc === 'submit'
    ) {
      setIsSubmitted(true);
      isError = {
        name: null,
        num: null,
        month: null,
        year: null,
        cvc: null,
      };
      setErr(isError);
    }
  };

  return (
    <main className='font-spaceGrotest max-w-[375px] mx-auto xl:grid xl:grid-cols-[auto,1fr] xl:max-w-[1440px]'>
      <Cards {...person} setPerson={setPerson} />

      {!isSubmitted ? (
        <Form
          person={person}
          setPerson={setPerson}
          handleSubmit={handleSubmit}
          err={err}
        />
      ) : (
        <ThankYou setPerson={setPerson} setIsSubmitted={setIsSubmitted} />
      )}
    </main>
  );
}

export default App;
