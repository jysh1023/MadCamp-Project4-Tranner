import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { UnorderedList, ListItem, Box } from "@chakra-ui/react";

const Item = () => {
  return (
    <Box>

    </Box>
  )
}

const MapSearch = ({ onLocationSelect }) => {
  const [suggestedKeywords, setSuggestedKeywords] = useState([]);

  const handleSearch = async (keyword) => {

    if(keyword.trim() != '') {
      try {
        const response = await axios.get('/api/naverapi', {
          params: {
            query: keyword,
            display: 5,
          }
        });

        if (response.status === 200) {
          const data = await response.data;
          setSuggestedKeywords(data.items.map((item) => item.title.replace( /(<([^>]+)>)/ig, '')));
        } else {
          setSuggestedKeywords([])
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        setSuggestedKeywords([]);
      }
    } else {
      setSuggestedKeywords([]);
    }
  };

  const selectLocationHandler = async (address) => {

    try {
      const response = await axios.get('/api/naverapi', {
        params: {
          query: address,
          display: 1,
        }
      })

      const data =  response.data;
      if (data.items && data.items.length > 0) {
        const place = data.items[0];
        const { mapx, mapy, title } = place;

        const longitude = parseFloat(mapx);
        const latitude = parseFloat(mapy);

        onLocationSelect(new window.naver.maps.LatLng(latitude, longitude));

        console.log('Selected location:', title, latitude, longitude);
      }

    } catch (error) {
      console.error('Error fetching location data: ', error);
    }

  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UnorderedList>
        {suggestedKeywords.map((keyword, index) => (
          <ListItem key={index} onClick={() => selectLocationHandler(keyword)}>
            {keyword}
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  )
}

export default MapSearch;