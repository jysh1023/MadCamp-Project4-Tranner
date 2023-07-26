import React, {useState} from "react";
import {
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Map from "./Map"
import MapSearch from "./MapSearch"

export default function SearchArea() {

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
      display={'flex'}>
      <Box flex={1} zIndex={10}>
        <MapSearch onLocationSelect={handleLocationSelect} />
      </Box>
      <Box flex={2} position='absolute' >
        <Map width="100vh" height="70vh" location={selectedLocation} />
      </Box>
    </Flex>
  )
}