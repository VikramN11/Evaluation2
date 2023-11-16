import { useState } from 'react';
import './App.css';
import Inputcode from './Components/Inputcode';
import Results from './Components/Results';

function App() {

  const [code, setCode] = useState("");

  const codeFunc = (val)=>{
    setCode(val);
  } 

  console.log(code);

  return (
    <div className="App">
      <Inputcode codeFunc = {codeFunc} />
      <Results code={code} />
    </div>
  );
}

export default App;
