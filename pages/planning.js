import React, { useState } from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import SearchArea from "../components/SearchArea"
import PlanArea from "../components/PlanArea"

import Layout from "../components/Layout"

export default function Planning() {

  return (
    <Layout>
      <Flex justifyContent='center' m='10px' h={'100vh'} >
        <Tabs variant='soft-rounded' colorScheme='teal' w='100%'>
          <TabList justifyContent='center'>
            <Tab>나의 계획</Tab>
            <Tab>일행과 비교하기</Tab>
          </TabList>
          <TabPanels justifyContent='center'>
            <TabPanel>
              <Flex display='flex' flexWrap='wrap' w='100%' gap='25px'>
                <Box flex='4' >
                  <PlanArea />
                </Box>
                <Box flex='6' minH={'875h'}>
                  <SearchArea />
                </Box>
              </Flex>
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