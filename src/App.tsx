//##Compañeros de grupo Karen Tatiana Jaimes, Andrey Sarria, Poldark Diaz

//##API que se utilizo es el seguiente https://jsonplaceholder.typicode.com/posts/1
import React from 'react';
import './App.css';
import Landing from './presentation/pages/landing';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
 /* const [number, setNumber] = useState<number | string>(5)
  const changeNumber = () => {
    setNumber("2")
  }*/
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
