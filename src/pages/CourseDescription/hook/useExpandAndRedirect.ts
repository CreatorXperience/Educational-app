import { useNavigate } from "react-router-dom";

const useExpandAndRedirect = () => {
  const navigate = useNavigate();
  const handleRedirectToVideo = (id: string) => {
    navigate(`/video/${id}`);
  };

  const handleExpand = (
    isExpand: boolean,
    setIsExpand: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (isExpand) {
      if (window.innerWidth < 800) {
        window.scrollTo(0, window.innerHeight - 800);
      }
      window.scrollTo(0, window.innerHeight / 2);
    }
    setIsExpand(!isExpand);
  };

  return { handleRedirectToVideo, handleExpand };
};

export default useExpandAndRedirect;
