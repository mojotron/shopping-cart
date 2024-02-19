import React, { ReactElement, useState } from 'react';

type SlideType = {
  id: string;
  element: ReactElement;
};

type PropsType = {
  slides: SlideType[];
};

const Slider = ({ slides }: PropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGoLeft = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((oldValue) => oldValue - 1);
  };

  const handleGoRight = () => {
    if (currentIndex === slides.length - 1) return;
    setCurrentIndex((oldValue) => oldValue + 1);
  };

  const handleChangeSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {slides[currentIndex].element}
      <div>
        <button type="button" onClick={handleGoLeft}>
          left
        </button>
        <button type="button" onClick={handleGoRight}>
          right
        </button>

        <div className="flex justify-between items-center gap-3">
          {Array.from({ length: slides.length }, (_, i) => (
            // eslint-disable-next-line
            <span
              key={i}
              onClick={() => handleChangeSlide(i)}
              className={`inline-block w-3 h-3 ${i === currentIndex ? 'bg-emerald-600' : 'bg-neutral-400'} rounded-full`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
