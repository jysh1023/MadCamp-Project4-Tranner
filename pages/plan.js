import React, { useState } from "react"
import Layout from "../components/Layout"
import {
  Box,
  HStack,
  FormLabel,
  Tag,
  SimpleGrid,
} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import axios from "axios";

const PlanBox = ({title, startday, styles, onClick}) => {
  return(
    <Box 
      bg='gray.300'
      height="250px"
      w='400px'
      alignItems="center"
      spacing={4}
      onClick={onClick}
    >
      <FormLabel
        mt='8px'
        mx='10px'
        fontSize='30px'
        fontWeight='bold'
        w='100%'
        pos='reative'
        >
        {title}
      </FormLabel>
      <FormLabel
        mt='8px'
        mx='10px'
        fontSize='20px'
        w='100%'
        pos='reative'
        >
        여행 시작 시간 : {startday}
      </FormLabel>
      <FormLabel
        mt='10px'
        mx='8px'
        fontSize='20px'
        w='100%'
        pos='reative'
        >
        테마
      </FormLabel>
      <SimpleGrid
        mt='8px'
        mx='10px'
        w='100%'
        pos='reative'
        columns={[2,5]}
        >
        {styles.map((style) => (
          <Tag
            w='70px'
            h='40px'
            display="flex"
            justifyContent="center"
            alignItems='center'
            borderRadius="10%"
            variant='solid'
            colorScheme="teal"
          >
            {style}
          </Tag>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default function Plan() {
  const router = useRouter();
  const [selectedPlanning, setSelectedPlanning] = useState(null);
  const [selectedPlanned, setSelectedPlanned] = useState(null);
  const [planning, setPlanning] = useState([]);
  const [planned, setPlanned] = useState([]);

  const addClick = () => {
    router.push('/createdate');
  };

  const handlePlanningClick = (index) => {
    setSelectedPlanning(index);
  };

  const handlePlannedClick = (index) => {
    setSelectedPlanned(index);
  };

  useEffect(() => {
    const userId = localStorage.getItem('id');
    async function fetchData() {
      try {
        const response = await axios.get(`/api/plan/${userId}`);
        const plans = response.data;
        console.log("plans", plans);
        const currentDate = new Date(); // 현재 날짜와 시간을 나타내는 Date 객체
        const planningArray = [];
        const plannedArray = [];
  
        plans.forEach((plan) => {
          const startday = new Date(plan.startday)
          const curDate = currentDate.getTime();
          console.log(startday, curDate);
          if (startday < curDate) {
            plannedArray.push(plan);
          } else {
            planningArray.push(plan);
          }
        });

        setPlanning(planningArray);
        setPlanned(plannedArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData(); // 데이터를 받아오는 함수를 호출하여 데이터를 받아옵니다.
  }, []);

  return (
    <Layout>
      <FormLabel
        mt='50px'
        mx='50px'
        fontSize='40px'
        spacing={4}>진행 중인 계획
        <Box overflowX="scroll" white-space='nowrap'>
        <HStack spacing={4} mt='20px' mb='10px'>
            <Box
              w='400px'
              bg='gray.100'
              borderRadius="5%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="250px"
              onClick={addClick}>
              <AddIcon
                bg='gray.100'
                height="100px"
                w='160px'
              />
            </Box>
          {planning.map((plan, index) => (
            <PlanBox
              key={index}
              title={plan.title}
              startday={plan.startday}
              styles={plan.styles}
              selected={selectedPlanning === index}
              onClick={() => handlePlanningClick(index)}
            />
          ))}
        </HStack>
        </Box>
      </FormLabel>
      <FormLabel
        mt='50px'
        mx='50px'
        fontSize='40px'
        spacing={4}>완료된 계획
        <Box overflowX="scroll">
        <HStack spacing={4} mt='20px' mb='10px'>
          {planned.map((plan, index) => (
            <PlanBox
              key={index}
              title={plan.title}
              startday={plan.startday}
              styles={plan.styles}
              selected={selectedPlanned === index}
              onClick={() => handlePlannedClick(index)}
            />
          ))}
        </HStack>
        </Box>
      </FormLabel>
    </Layout>
  )
}