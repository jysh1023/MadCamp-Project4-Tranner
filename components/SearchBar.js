import React, { useState } from "react";
import { Flex, Input, Button, } from "@chakra-ui/react";

const SearchBar = ({onSearch}) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
    onSearch(e.target.value);
  }

  const handleSearchClick = () => {
    if (searchKeyword.trim() !== '') {
      onSearch(searchKeyword);
    }
  };

  return (
    <Flex w='95vh' alignItems='center' my='10px'>
      <Input
        type="text"
        value={searchKeyword}
        onChange={handleInputChange}
        placeholder="Search for a location"
        mr='10px'
      />

      <Button
        colorScheme='teal'
        type='submit'
        onClick={handleSearchClick}>
        검색
      </Button>
    </Flex>
  );
};

export default SearchBar;