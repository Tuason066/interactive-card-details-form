import Cards from './Cards';
import Form from './Form';

function App() {
  /* REFACTOR AND FINALIZE THE STYLE THEN PROCEED TO FUNCTIONALITIES */
  return (
    <main className='max-w-[375px] mx-auto xl:grid xl:grid-cols-[auto,1fr] xl:max-w-[1440px]'>
      <Cards />
      <Form />
    </main>
  );
}

export default App;
