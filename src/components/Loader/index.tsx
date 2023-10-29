import LoaderWrapper from "./LoaderWrapper";

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
