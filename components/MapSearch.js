import React, { useEffect, useState } from "react";
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


const MapSearch = ({ onLocationSelect, onDateSelect}) => {

  const [suggestedLocations, setSuggestedLocations] = useState([]);
  const day = onDateSelect;
  const [dayInfo, setDayInfo] = useState([]);

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

  const handleAddItem = async (item) => {
    const newDay = {
      title: item.title,
      content: item.address,
      API: item,
    };

    setDayInfo((prevDayInfo) => [...prevDayInfo, newDay]);
    console.log("dayInfo:", dayInfo); // Add this line to check the content of dayInfo
    updateData([...dayInfo, newDay]);
  };

  useEffect(() => {
    console.log("dayInfo in useEffect:", dayInfo); // Add this line to check the content of dayInfo
    if (dayInfo.length !== 0) {
      updateData(dayInfo);
    }
  }, [dayInfo]);

  const updateData = async (data) => {

    if (!Array.isArray(data) || data.length === 0) {
      console.log("Invalid data:", data);
      return;
    }

    console.log("data in updateData:", data);

    const userId = localStorage.getItem('id');

    try {

      const response = await axios.put('./api/updateplan', {
        userId: userId,
        days: data,
        day: day,
      })

      console.log(response.data)

      if (response.status == 200) {
        console.log("Update plan successful ", response.data)
      } else {
        console.error("Error updating plan: ", error)
      }
    } catch (error) {
      console.error("Error updating plan: ", error)
    };
  }

  const SearchItem = ({item, index}) => {
    const keyword = item.title.replace( /(<([^>]+)>)/ig, '');
    return (
      <Card size={'sm'} flexDirection={'row'} align={'center'}>
        <Flex flexDirection={'column'}>
          <CardBody onClick={()=>selectLocationHandler(keyword)} >
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
            onClick={()=>handleAddItem(item)}>
            추가하기
          </Button>
        </Flex>

      </Card>
    )
  };

  return (
    <Flex flexDirection={'column'}>
      <SearchBar onSearch={handleSearch} />
      <Stack spacing={1} >
        {suggestedLocations.map((item, index,) => (
          <SearchItem key={index} item={item} />
        ))}
      </Stack>
    </Flex>
  )
}

export default MapSearch;