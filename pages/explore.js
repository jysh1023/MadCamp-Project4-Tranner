import React, { useState, useEffect, use } from "react"
import Layout from "../components/Layout"
import {
  Box,
  Center,
  Text,
  HStack,
  useColorModeValue,
  Progress,
  ButtonGroup,
  Button,
  VStack,
  Tag,
  Flex,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'
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

export default function Explore() {
  const [plans, setPlans] = useState([]); 
  const [aloneClick, setaloneClick] = useState(false);
  const [friendClick, setfriendClick] = useState(false);
  const [coupleClick, setcoupleClick] = useState(false);
  const [lifeClick, setlifeClick] = useState(false);
  const [childClick, setchildClick] = useState(false);
  const [parentsClick, setparentsClick] = useState(false);
  const [etcClick, setetcClick] = useState(false);
  const [activeClick, setactiveClick] = useState(false);
  const [hotClick, sethotClick] = useState(false);
  const [artClick, setartClick] = useState(false);
  const [famousClick, setfamousClick] = useState(false);
  const [healingClick, sethealingClick] = useState(false);
  const [travelClick, settravelClick] = useState(false);
  const [foodClick, setfoodClick] = useState(false);
  const [shopClick, setshopClick] = useState(false);
  const [_plan, setPlan] = useState([]);

  let who_list = ['혼자', '친구와', '연인과', '배우자와', '아이와', '부모님과', '기타'];
  let who_select = [aloneClick, friendClick,coupleClick, lifeClick, childClick, parentsClick, etcClick];
  let styles_list = ['체험', '핫플', '힐링', '관광지', '문화,예술', '여행지', '쇼핑', '먹거리'];
  let styles_select =[activeClick, hotClick, healingClick, famousClick, artClick, travelClick, shopClick, foodClick];
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/selectplan`);
        const plans = response.data;
        console.log("plans", plans);
        setPlan(plans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, []);

  
  
  
  return (
    <Layout>
      <Center display={'flex'} alignItems={'center'} py={50}>
        <Box
        width={'1600px'}
        height={'800px'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
          <Center>
            <Input mt='70px' placeholder='여행제목을 입력해주세요' w='1450px' h = '50px'onChange={(e) => onForm4Change(e.target.value)}/>
          </Center>
          <Center>
          <HStack spacing={3}>
            <FormLabel fontSize='25px' mt = '6px'>Who :</FormLabel>
            <HStack>
              <Flex flexWrap="wrap" mt={2}>
                <Tag
                  size='lg'
                  variant='solid'
                  mr={2}
                  onClick={() => setaloneClick((aloneClick)=>!aloneClick)}
                  colorScheme = {aloneClick ? 'red' : 'teal'}
                >
                  혼자
                </Tag>
                <Tag
                  size='lg'
                  variant='solid'
                  mr={2}
                  onClick={() => setfriendClick((friendClickClick)=>!friendClickClick)}
                  colorScheme = {friendClick ? 'red' : 'teal'}
                >
                  친구와
                </Tag>
                <Tag
                  size='lg'
                  variant='solid'
                  mr={2}
                  onClick={() => setcoupleClick((coupleClick)=>!coupleClick)}
                  colorScheme = {coupleClick ? 'red' : 'teal'}
                >
                  연인과
                </Tag>
                <Tag
                  size='lg'
                  variant='solid'
                  mr={2}
                  onClick={() => setlifeClick((lifeClick)=>!lifeClick)}
                  colorScheme = {lifeClick ? 'red' : 'teal'}
                >
                  배우자와
                </Tag>
                <Tag
                  size='lg'
                  variant='solid'
                  mr={2}
                  onClick={() => setchildClick((childClick)=>!childClick)}
                  colorScheme = {childClick ? 'red' : 'teal'}
                >
                  아이와
                </Tag>
                <Tag
                  size='lg'
                  variant='solid'
                  mr={2}
                  onClick={() => setparentsClick((parentsClick)=>!parentsClick)}
                  colorScheme = {parentsClick ? 'red' : 'teal'}
                >
                  부모님과
                </Tag>
                <Tag
                  size='lg'
                  variant='solid'
                  onClick={() => setetcClick((etcClick)=>!etcClick)}
                  colorScheme = {etcClick ? 'red' : 'teal'}
                >
                    기타
                </Tag>
              </Flex>
            </HStack>
            <FormLabel fontSize='25px' mt='6px' ml='10px' mr='-10px'>Styles :</FormLabel>
            <HStack ml= '10px' mt='6px'>
              <Tag
                size='lg'
                variant='solid'
                mr={2}
                onClick={() => setactiveClick((activeClick)=>!activeClick)}
                colorScheme = {activeClick ? 'red' : 'teal'}
              >
                체험
              </Tag>
              <Tag
                size='lg'
                variant='solid'
                mr={2}
                onClick={() => sethotClick((hotClick)=>!hotClick)}
                colorScheme = {hotClick ? 'red' : 'teal'}
              >
                핫플
              </Tag>
              <Tag
                size='lg'
                variant='solid'
                mr={2}
                onClick={() => sethealingClick((healingClick)=>!healingClick)}
                colorScheme = {healingClick ? 'red' : 'teal'}
              >
                힐링
              </Tag>
              <Tag
                size='lg'
                variant='solid'
                onClick={() => setfamousClick((aloneClick)=>!aloneClick)}
                colorScheme = {famousClick ? 'red' : 'teal'}
              >
                관광지
              </Tag>
            <Tag
                size='lg'
                variant='solid'
                mr={2}
                onClick={() => setartClick((aloneClick)=>!aloneClick)}
                colorScheme = {artClick ? 'red' : 'teal'}
            >
                문화,예술
            </Tag>
            <Tag
                size='lg'
                variant='solid'
                mr={2}
                onClick={() => settravelClick((aloneClick)=>!aloneClick)}
                colorScheme = {travelClick ? 'red' : 'teal'}
            >
                여행지
            </Tag>
            <Tag
                size='lg'
                variant='solid'
                mr={2}
                onClick={() => setshopClick((shopClick)=>!shopClick)}
                colorScheme = {shopClick ? 'red' : 'teal'}
            >
                쇼핑
            </Tag>
            <Tag
                size='lg'
                variant='solid'
                onClick={() => setfoodClick((foodClick)=>!foodClick)}
                colorScheme = {foodClick ? 'red' : 'teal'}
            >
                먹거리
            </Tag>
            </HStack>
          </HStack>
          </Center>
          <Box overflowY="scroll" white-space='nowrap' mr='50px'>
          <Center>
            <SimpleGrid columns={[3]} mt='50px' h='500px' spacing={4}>
              {_plan.map((plan, index) => (
                <PlanBox
                key={index}
                title={plan.title}
                startday={plan.startday}
                styles={plan.styles}
                onClick={() => handlePlannedClick(index)}
                />
              ))}
            </SimpleGrid>
          </Center>
          </Box>
        </Box>
      </Center>
    </Layout>
  )
}

