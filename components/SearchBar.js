import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

const SearchBar = ({onSearch}) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
    console.log(searchKeyword)
    onSearch(e.target.value);
  }

  const handleSearchClick = () => {
    if (searchKeyword.trim() !== '') {
      onSearch(searchKeyword);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={searchKeyword}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
      />
      <Button onClick={handleSearchClick}> 검색 </Button>
    </div>


  );
};

export default SearchBar;