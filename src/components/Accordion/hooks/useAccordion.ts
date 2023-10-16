import { useRef, useState } from "react";

const useAccordion = () => {
  const [isIconClick, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    setIsClicked(!isIconClick);
    if (ref.current) {
      ref.current.style.height = isIconClick ? "60px" : "auto";
    }
  };

  return {
    isIconClick,
    handleIconClick,
    ref,
  };
};

export default useAccordion;
