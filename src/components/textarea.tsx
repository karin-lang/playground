import { ChangeEvent } from 'react';

export type TextAreaProps = {
  value?: string,
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  contentEditable?: boolean,
};

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className='bg-slate-800 rounded outline-none resize-none scrollbar-none p-2 h-[25vh] w-[90vw]'
      value={props.value}
      onChange={props.onChange}
      contentEditable={props.contentEditable}
    />
  );
}
