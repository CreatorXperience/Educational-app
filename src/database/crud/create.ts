import { database } from "../db";
import { set, ref, push } from "firebase/database";
import uniqueRandom from "unique-random";

type TCourse = {
  image: string;
  category: string;
  title: string;
  author: {
    name: string;
    status: string;
    stars: number;
  };
};

const createCourse = (course: TCourse) => {
  let newBookRef = ref(database, "books");
  let pushRef = push(newBookRef);
  console.log(pushRef);

  set(pushRef, {
    id: pushRef.key,
    ...course,
  });
};

export default createCourse;
