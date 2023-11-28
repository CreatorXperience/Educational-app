import { searchIcon } from "../../constants/images";
import SearchBarWrapper from "./searchBarWrapper";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <div className="inputWrapper">
        <input type="text" placeholder="Search course name" />
        <span>{searchIcon()}</span>
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
