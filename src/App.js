import {useState} from 'react'
import logo from './logo.svg';
import Card from './component/Card';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }


   const data = {
   name: 'Irsa',
   class: 13,
   section: "A"
   }

  return (
    <>
   <h1>counter: {counter}</h1>
   <button onClick={increment} className='bg-blue-300 m-1 p-1 rounded border-black border-2'>increment</button>
   <button onClick={decrement} className='bg-blue-300 m-1 p-1 rounded border-black border-2'>decrement</button>
   <Card data= {data}/>
   <Card data= {data}/>
    </>
  );
}

export default App;
