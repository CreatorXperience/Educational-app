import { useRef, useState } from "react";

const useAccordion = () => {
  const [isIconClick, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    setIsClicked(!isIconClick);
    if (ref.current) {
      ref.current.style.height = isIconClick ? "120px" : "auto";
    }
  };

  return {
    handleIconClick,
    ref,
  };
};

export default useAccordion;
