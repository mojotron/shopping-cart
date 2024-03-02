/* eslint-disable jsx-a11y/click-events-have-key-events, react/self-closing-comp, jsx-a11y/no-static-element-interactions */

import { Dispatch, SetStateAction } from 'react';

type PropsType = {
  length: number;
  index: number;
  onSelectIndex: Dispatch<SetStateAction<number>>;
};

const Dots = ({ length, index, onSelectIndex }: PropsType) => {
  return (
    <div className="mt-auto flex justify-center items-center gap-3 pt-8">
      {Array.from({ length }, (_, i) => (
        <span
          key={i}
          onClick={() => onSelectIndex(i)}
          className={`inline-block size-2 sm:size-3 
      ${i === index ? 'bg-green-600' : 'bg-gray-400'}
       rounded-full`}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
