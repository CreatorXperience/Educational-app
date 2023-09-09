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
  try {
    let newBookRef = ref(database, "books");
    let pushRef = push(newBookRef);

    set(pushRef, {
      id: pushRef.key,
      ...course,
    });
  } catch (err) {
    console.log(err);
  }
};

export default createCourse;
