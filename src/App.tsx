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
      ― 入力 ―
      <textarea className="textarea" onChange={(event) => {
        const newInput = event.target.value;
        setInput(newInput);

        try {
          setOutput(parse(newInput));
        } catch (e) {
          setOutput('Failed to parse. (possibly parser panicked)');
          console.error(e);
        }
      }} value={input} />
      ― 出力 ―
      <textarea className="textarea" onChange={() => {}} value={output} />
    </div>
  );
}
