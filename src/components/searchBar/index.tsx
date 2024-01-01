import { useState } from "react";
import { searchIcon } from "../../constants/images";
import SearchBarWrapper from "./searchBarWrapper";

type TSeachProp = {
  updateTerm?: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const SearchBar = ({ updateTerm }: TSeachProp) => {
  const [userInput, setUserinput] = useState<string>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTerm && updateTerm(userInput);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserinput(e.target.value);
  };

  return (
    <SearchBarWrapper>
      <div className="inputWrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => handleUserInput(e)}
            type="text"
            name="searchterm"
            placeholder="Search course name"
          />
          <span>{searchIcon()}</span>
        </form>
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
