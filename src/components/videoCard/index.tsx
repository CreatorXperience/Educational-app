import { TDatabase } from "../../types/type";
import CourseComponent from "../courseComponent";

type TVideoProps = {
  data: TDatabase[] | undefined;
  category: string;
  setVideoId: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const VideoCard = ({ data, category, setVideoId }: TVideoProps) => {
  return (
    <div>
      {data &&
        data?.map((content, i) => {
          if (new RegExp(content.category, "i").exec(category) && i < 6) {
            return (
              <CourseComponent
                data={content}
                setVideoId={setVideoId}
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
