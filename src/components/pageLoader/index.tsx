import { ReactNode, useEffect, useState } from "react";
import PageLoaderWrapper from "./pageLoaderWrapper";

type PageLoaderProps = {
  children: ReactNode;
};

const PageLoader = ({ children }: PageLoaderProps) => {
  const [isLoaderFinished, setisLoaderFinished] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisLoaderFinished(true);
    }, 6000);
  });
  return (
    <PageLoaderWrapper isLoaderEnd={isLoaderFinished}>
      {isLoaderFinished ? children : <div className="loader"></div>}
    </PageLoaderWrapper>
  );
};

export default PageLoader;
