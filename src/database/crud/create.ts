import { database } from "../db";
import { set, ref, push } from "firebase/database";
import uniqueRandom from "unique-random";

const uploadCourse = (category: string) => {
  let newBookRef = ref(database, "books");
  let pushRef = push(newBookRef);
  console.log(pushRef);

  set(pushRef, {
    id: pushRef.key,
    image: "image_url_15.jpg",
    category: "design",
    title: "Interaction Design: Beyond Human-Computer Interaction",
    author: {
      name: "Jenny Preece",
      status: "interaction designer",
      stars: 4.5,
    },
  });
};

export default uploadCourse;
