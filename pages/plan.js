import React from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import Layout from "../components/Layout"

export default function Plan() {
  return (
    <Layout>
      <Container centerContent paod>
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList>
            <Tab>나의 계획</Tab>
            <Tab>일행과 비교하기</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>나의 계획</p>
            </TabPanel>
            <TabPanel>
              <p>일행과 비교하기</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  )
}