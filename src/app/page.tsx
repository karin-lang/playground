'use client';

import { useState } from 'react';
import init, { compile } from '../wasm';
import TextArea from '@/components/textarea';

init();

export default function Home() {
  const [input, setInput] = useState('fn main() {}');
  const [output, setOutput] = useState('');
  const [log, setLog] = useState('');

  return (
    <main className='bg-slate-900 text-gray-300 text-sm h-[100vh]'>
      <div className='flex flex-col items-center justify-center gap-4 h-full'>
        <TextArea value={input} onChange={(event) => onChangeInput(event.target.value)} />
        <TextArea value={output} onChange={() => {}} contentEditable={false} />
        <TextArea value={log} onChange={() => {}} contentEditable={false} />
      </div>
    </main>
  );

  function onChangeInput(value: string) {
    setInput(value);
    compileKarin(value);
  }

  function compileKarin(input: string) {
    try {
      const newOutput = compile(input);
      setOutput(newOutput);
      setLog('');
    } catch (err) {
      setLog('[Compile Error]\n' + String(err));
    }
  }
}
