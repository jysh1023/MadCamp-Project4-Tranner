import React, {useState, useEffect} from "react";
import {
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Map from "./Map"
import MapSearch from "./MapSearch"

export default function SearchArea({ dateSelected }) {

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };


  return(
    <Flex
      minH={'85vh'}
      align={'center'}
      justify={'center'}
      pt={'10px'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      boxShadow={'xl'}
      rounded={'xl'}
      flexDirection={'column'}

      >
      <Box zIndex={10} position='absolute' top={'140px'}>
        <MapSearch onLocationSelect={handleLocationSelect} onDateSelect={dateSelected} />
      </Box>
      <Box position='absolute' mt={'30px'}>
        <Map width="100vh" height="70vh" location={selectedLocation} />
      </Box>
    </Flex>
  )
}