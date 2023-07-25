import React, { useState } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

const SearchBar = ({onSearch}) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
    onSearch(e.target.value);
    console.log(searchKeyword);
  }

  const handleSearchClick = () => {
    console.log('clicked')
    if (searchKeyword.trim() !== '') {
      onSearch(searchKeyword);
    }
  };

  return (
    <FormControl>
      <FormLabel>Location</FormLabel>
      <Input
        type="text"
        value={searchKeyword}
        onChange={handleInputChange}
        placeholder="Search for a location"
      />
      <Button
        mt={4}
        colorScheme='teal'
        type='submit'
        onClick={handleSearchClick}>
        검색
      </Button>
    </FormControl>


  );
};

export default SearchBar;