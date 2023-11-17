import { User } from "firebase/auth";
import useGetUser from "./hooks/useGetUser";
import { ReactElement, createContext, useMemo, useState } from "react";

type TUser = {
  user: User | undefined;
  isLoggedIn: boolean;
};

type TRepoProps = {
  children: ReactElement;
};

export const userProvider = createContext<TUser>({
  user: undefined,
  isLoggedIn: false,
});

const UserRepo = ({ children }: TRepoProps) => {
  const { user, isLoggedIn } = useGetUser();

  const memoizedUser = useMemo(() => {
    return { user, isLoggedIn };
  }, [user]);

  console.log(memoizedUser);

  return (
    <div>
      <userProvider.Provider value={memoizedUser}>
        {children}
      </userProvider.Provider>
    </div>
  );
};

export default UserRepo;
