import React, {useState} from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import SearchArea from "../components/SearchArea"

import Layout from "../components/Layout"

export default function Planning() {

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
              <SearchArea />
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