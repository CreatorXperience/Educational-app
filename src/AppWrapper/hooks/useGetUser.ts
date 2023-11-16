import { useEffect, useState } from "react";
import auth from "../../auth/auth";
import { User } from "firebase/auth";

const useGetUser = () => {
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    auth()
      .signIn("cola@gmail.com", "1234567890")
      .then((user) => {
        setUser(user);
      });
  }, []);

  return { user, isLoggedIn };
};

export default useGetUser;
