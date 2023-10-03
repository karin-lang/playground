import { useEffect, useState } from 'react';
import './App.css';
import compilerWasmInit, { parse } from './compiler-wasm/compiler_wasm';

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    compilerWasmInit();
  }, [compilerWasmInit]);

  return (
    <div className="App">
      <textarea className="textarea" onChange={(event) => {
        const newInput = event.target.value;
        setInput(newInput);
        setOutput(parse(newInput));
      }} value={input} />
      <textarea className="textarea" onChange={() => {}} value={output} />
    </div>
  );
}
