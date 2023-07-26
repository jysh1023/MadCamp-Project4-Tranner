import React, {useState} from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { Container, Flex } from "@chakra-ui/react"
import Map from "../components/Map"
import MapSearch from "../components/MapSearch"
import Layout from "../components/Layout"

export default function Plan() {

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Layout>
      <Flex alignItems='center'>
        <Tabs variant='soft-rounded' colorScheme='teal'>
          <TabList>
            <Tab>나의 계획</Tab>
            <Tab>일행과 비교하기</Tab>
          </TabList>
          <TabPanels>
            <TabPanel width='100%'>
              <div>
                <MapSearch onLocationSelect={handleLocationSelect} />
                <Map width="500px" height="400px" location={selectedLocation} />
              </div>
            </TabPanel>
            <TabPanel>
              <p>일행과 비교하기</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Layout>
  )
}