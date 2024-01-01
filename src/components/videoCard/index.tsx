import { TDatabase } from "../../types/type";
import CourseComponent from "../courseComponent";

type TVideoProps = {
  data: TDatabase[] | undefined;
  category: string;
  setCurrentVideo: React.Dispatch<React.SetStateAction<TDatabase | undefined>>;
};
const VideoCard = ({ data, category, setCurrentVideo }: TVideoProps) => {
  return (
    <div>
      {data &&
        data?.map((content, i) => {
          if (new RegExp(content.category, "i").exec(category) && i < 6) {
            return (
              <CourseComponent
                data={content}
                setCurrentVideo={setCurrentVideo}
                key={content._id}
              />
            );
          }
          return "";
        })}
    </div>
  );
};

export default VideoCard;
