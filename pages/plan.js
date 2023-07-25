import React, {useState} from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import Map from "../components/Map"
import MapSearch from "../components/MapSearch"

export default function Plan() {

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Container centerContent>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>나의 계획</Tab>
          <Tab>일행과 비교하기</Tab>
        </TabList>
        <TabPanels>
          <TabPanel width='100%'>
            <div>
              <p>나의 계획</p>
              <MapSearch onLocationSelect={handleLocationSelect} />
              <Map width="500px" height="400px" location={selectedLocation} />
            </div>
          </TabPanel>
          <TabPanel>
            <p>일행과 비교하기</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}