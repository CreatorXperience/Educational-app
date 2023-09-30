import { useEffect, useState, useRef } from "react";

const useSlide = (content: number = 1) => {
  const $ref = useRef<HTMLDivElement>(null);
  const [_currentSlide, setCurrentSlide] = useState(0);
  const [slideAmount, setSlideAmount] = useState(content);

  const _sliderDot = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    let current;
    if (_currentSlide === 0) {
      current = 0;
    } else {
      current = _currentSlide - 1;
      slide(current);
      activeSlide(current);
      setCurrentSlide(current);
    }
  };

  const handleNext = () => {
    let current = _currentSlide;
    if (current === 0 || current < slideAmount) {
      let recurrent = current + 1;
      slide(recurrent);
      activeSlide(recurrent);
      setCurrentSlide(recurrent);
    } else if (current === slideAmount - 1) {
      slide(0);
      activeSlide(0);
      setCurrentSlide(0);
    }
  };

  const handleDotClick = (param: number) => {
    slide(param);
    setCurrentSlide(param);
    activeSlide(param);
  };

  const activeSlide = (active: number) => {
    const _singleDot =
      _sliderDot.current?.querySelectorAll<HTMLElement>(".dot");
    if (_singleDot) {
      // @ts-ignore
      _singleDot.forEach((slide: HTMLElement, index: number) => {
        if (index !== active) {
          _singleDot[index].style.background = "grey";
          _singleDot[index].style.width = "10px";
        } else {
          _singleDot[index].style.background =
            "linear-gradient(180deg, #ffc27a 0%, #ffa337 100%)";
          _singleDot[index].style.width = "20px";
        }
      });
    }
  };

  const slide_container =
    $ref.current?.querySelectorAll<HTMLElement>(".carousel-card");

  const slide = (current: number) => {
    slide_container?.forEach((item: HTMLElement) => {
      item.style.transform = `translateX(-${current * 108}%)`;
    });
  };

  useEffect(() => {
    if (window.innerWidth < 1400) {
      setSlideAmount((slide_container?.length as number) - 1);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideAmount > 1) {
        setCurrentSlide(_currentSlide + 1);
      }
    }, 4000);

    if (_currentSlide > slideAmount - 1) {
      setCurrentSlide(0);
    }

    slide(_currentSlide);
    activeSlide(_currentSlide);
    return () => clearInterval(interval);
  }, [_currentSlide]);

  return {
    handleNext,
    handlePrev,
    handleDotClick,
    activeSlide,
    slide,
    $ref,
    _sliderDot,
  };
};

export default useSlide;
