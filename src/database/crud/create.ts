import { database } from "../db";
import { set, ref } from "firebase/database";

const uploadCourse = (name: "") => {
  let generateRandomNumber = () => {
    let number = Math.random() * 100;
  };
  set(ref(database, `books/${name}${generateRandomNumber()}`), {
    id: 5,
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
