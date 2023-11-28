import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const topSection = useRef<HTMLDivElement>(null);
  const [isIntersected, setIsIntersected] = useState(true);

  const callback = (entries: any) => {
    entries.forEach((entry: any) => {
      console.log(entry.isIntersecting);
      if (!entry.isIntersecting) {
        setIsIntersected(false);
      } else {
        setIsIntersected(true);
      }
    });
  };

  let interSectionObserver = new IntersectionObserver(callback, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (topSection && topSection.current) {
      interSectionObserver.observe(topSection.current as Element);
    }
  });

  useEffect(() => {
    if (!isIntersected && navRef && navRef.current) {
      navRef.current.style.top = "0";
      navRef.current.style.position = "fixed";
      navRef.current.style.width = "100%";
      navRef.current.style.zIndex = "999";
    } else if (isIntersected && navRef && navRef.current) {
      navRef.current.style.top = "";
      navRef.current.style.position = "relative";
    }
  });

  return {
    topSection,
    navRef,
  };
};

export default useIntersectionObserver;
