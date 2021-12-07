import './App.css';
import Section from './components/Section'
import koala from './assets/koala.jpg'
import tiger from './assets/tiger.jpg'

function App() {

  let hello = 'Hello world'
  const handleClick = () => {
    alert('Hello world')
  }

  return (
    <div className='App'>
     {/* <h1 className='color' >{hello}</h1> */}
     <Section text='My first section component'  />
     <Section text='My second section component' />
     <button onClick={handleClick}>
       Click me
     </button>
    </div>
  );
}

export default App;


