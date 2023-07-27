import React, { useEffect, useState } from "react";
import {
  Flex,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Card,
  CardBody,
  Heading,
  Text
} from "@chakra-ui/react";

const planItems = () => {
  return (
    <Card>
      <CardBody>
        <Heading size='xs'>
          {item.title.replace(/(<([^>]+)>)/ig, '')}
        </Heading>
        <Text pt='2' fontSize='sm'>
          {item.address}
        </Text>
      </CardBody>
    </Card>
  )
}

export default function PlanArea() {

  const [days, setDays] = useState([1, 2, 3]);
  const [currentDay, setCurrentDay] = useState(0);

  return (
    <Flex
      minH={'85vh'}
      py={2}
      bg={useColorModeValue('gray.50', 'gray.800')}
      boxShadow={'xl'}
      rounded={'xl'}
      flexDirection='column'>
      <Tabs
        variant='soft-rounded'
        colorScheme="teal"
        w='100%'
        gap='10px'
        m='10px'
      >
        <TabList justifyContent={'center'}>
          <Tab onClick={() => setCurrentDay(0)}>전체</Tab>
          {days.map((tab, index) => (
            <Tab key={index} onClick={()=>setCurrentDay(tab)}>Day {tab}</Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <h1>전체</h1>
          </TabPanel>
          {days.map((panel, index) => (
            <TabPanel key={index}>Day {panel}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  )
}