import { SrvRecord } from "dns";

type TDatabase = {
  _id: number;
  coverTitle: string;
  category: string;
  author: {
    name: string;
    post: string;
  };
  stars: number;
  courseDescription: string;
  coverImage: string;
  courseContent: {
    topic: {
      title: string;
      id: string;
      description: string;
      youtubeVideoId: string;
    }[];
  };
};

export type { TDatabase };
