import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import {
  Flex,
  Stack,
  Card,
  CardBody,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";


const MapSearch = ({ onLocationSelect }) => {

  const [suggestedLocations, setSuggestedLocations] = useState([]);

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
          setSuggestedLocations(data.items.map((item) => item));
        } else {
          setSuggestedLocations([]);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        setSuggestedLocations([]);
      }
    } else {
      setSuggestedLocations([]);
    }
  };

  const selectLocationHandler = async (address) => {
    setSuggestedLocations([]);

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

  const handleAddItem = async() => {

  }

  const SearchItem = ({item, index}) => {
    const keyword = item.title.replace( /(<([^>]+)>)/ig, '');
    return (
      <Card size={'sm'} onClick={()=>selectLocationHandler(keyword)} flexDirection={'row'} align={'center'}>
        <Flex flexDirection={'column'}>
          <CardBody>
            <Heading size='xs'>
              {item.title.replace(/(<([^>]+)>)/ig, '')}
            </Heading>

            <Text pt='2' fontSize='sm'>
              {item.address}
            </Text>
          </CardBody>
        </Flex>
        <Flex pos={'absolute'} right={'15px'}>
          <Button
            colorScheme='teal'
            type='submit'
            size={'sm'}
            onClick={handleAddItem}>
            추가하기
          </Button>
        </Flex>

      </Card>
    )
  };

  return (
    <Flex flexDirection={'column'}>
      <SearchBar onSearch={handleSearch} />
      <Stack spacing={1}>
        {suggestedLocations.map((item, index,) => (
          <SearchItem key={index} item={item} />
        ))}
      </Stack>
    </Flex>
  )
}

export default MapSearch;