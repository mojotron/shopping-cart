import { ReactElement, useCallback, useEffect, useState } from 'react';
import Dots from './Dots';
import SlideArrow from './SlideArrow';

type PropsType = {
  slides: ReactElement[];
};

const Slider = ({ slides }: PropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstSlide = currentIndex === 0;
  const lastSlide = currentIndex === slides.length - 1;

  const handleGoLeft = useCallback(() => {
    if (firstSlide) return;
    setCurrentIndex((oldValue) => oldValue - 1);
  }, [firstSlide]);

  const handleGoRight = useCallback(() => {
    if (lastSlide) return;
    setCurrentIndex((oldValue) => oldValue + 1);
  }, [lastSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lastSlide) setCurrentIndex(0);
      else setCurrentIndex((lastValue) => lastValue + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [lastSlide, currentIndex]);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handleGoLeft();
      if (e.key === 'ArrowRight') handleGoRight();
    };

    document.addEventListener('keydown', handleKeyboard);

    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [handleGoLeft, handleGoRight]);

  return (
    <div className="relative s-full max-w-[600px] py-8 px-10 flex flex-col">
      <div className="px-4">{slides[currentIndex]}</div>

      {!firstSlide && <SlideArrow orientation="left" onClick={handleGoLeft} />}
      {!lastSlide && <SlideArrow orientation="right" onClick={handleGoRight} />}

      {slides.length > 1 && (
        <Dots
          length={slides.length}
          index={currentIndex}
          onSelectIndex={setCurrentIndex}
        />
      )}
    </div>
  );
};

export default Slider;
