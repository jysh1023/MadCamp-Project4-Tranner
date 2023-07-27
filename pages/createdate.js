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
import Layout from "../components/Layout"
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import DatePicker from './datepicker';
import { useRouter } from 'next/router';
import axios from 'axios';

const Form1 = ({onForm1Change}) => {
    return (
        <>
            <Box h={'40px'} mt={1} mx="75px" mb={6} pos={'absolute'}>
                <Text
                    color={'black.500'}
                    fontWeight={800}
                    fontSize={'30px'}
                    letterSpacing={1.1}>
                    여행일정 등록하기
                </Text>
            </Box>
            <Box
                className='datepicker-container'
                h={'800px'}
                w={'600px'}
                pos={'relative'}
                mt='150px'
                ml='40%'>
                <DatePicker onDateChange={(start, end) => {
                    onForm1Change(start, end);
                }}/>
            </Box>
        </>
    )
}

const Form2 = ({onForm2Change}) => {
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
  const [who, setWho] = useState([]);
  const [styles, setStyles] = useState([]);

  let who_list = ['혼자', '친구와', '연인과', '배우자와', '아이와', '부모님과', '기타'];
  let who_select = [aloneClick, friendClick,coupleClick, lifeClick, childClick, parentsClick, etcClick];
  let styles_list = ['체험', '핫플', '힐링', '관광지', '문화,예술', '여행지', '쇼핑', '먹거리'];
  let styles_select =[activeClick, hotClick, healingClick, famousClick, artClick, travelClick, shopClick, foodClick];

  useEffect(() => {
    const selectedWho = [];
    const selectedStyles = [];

    who_select.forEach((isClicked, index) => {
        if (isClicked) {
            selectedWho.push(who_list[index]);
        }
    });

    styles_select.forEach((isClicked, index) => {
        if (isClicked) {
            selectedStyles.push(styles_list[index]);
        }
    });
    onForm2Change(selectedWho, selectedStyles)
  }, [aloneClick, friendClick, coupleClick, lifeClick, childClick, parentsClick, etcClick, activeClick, hotClick, artClick, famousClick, healingClick, travelClick, foodClick, shopClick]);

  return (
    <>
        <Box h={'40px'} mt={1} mx="75px" mb={6} pos={'absolute'}>
            <Text
                color={'black.500'}
                fontWeight={800}
                fontSize={'30px'}
                letterSpacing={1.1}>
                어떤 스타일의 여행을 계획하고 계신가요?
            </Text>
        </Box>
        <FormLabel
          mt='100px'
          mx='75px'
          fontSize='25px'
          spacing={4}>Who
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
                      onClick={() => setlifeClick((lifeClick)=>!lifeClick)}
                      colorScheme = {lifeClick ? 'red' : 'teal'}
                  >
                      배우자와
                  </Tag>
              </Flex>
          </HStack>
          <HStack>
              <Flex flexWrap="wrap" mt={2}>
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
      </FormLabel>
      <FormLabel
        mt='100px'
        mx='75px'
        fontSize='25px'
        spacing={4}>Styles
          <HStack>
              <Flex flexWrap="wrap" mt={2}>
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
              </Flex>
          </HStack>
          <HStack>
              <Flex flexWrap="wrap" mt={2}>
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
              </Flex>
          </HStack>
      </FormLabel>
    </>
  )
}

const CityBox = ({ image, name, selected, onClick }) => {
  return (
    <Box
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      height="250px"
      borderRadius="20%"
      fontSize="40px"
      alignItems="center"
      color="white"
      display="flex"
      justifyContent="center"
      fontWeight="bold"
      opacity={selected ? 0.3 : 1} // 투명도 적용
      onClick={onClick}
    >
      {name}
    </Box>
  );
};

const Form3 = ({onForm3Change}) => {
  const cities = [
    { image: '113.png', name: '경복궁' },
    { image: '2.png', name: '해운대' },
    { image: '3.png', name: '제주도' },
    { image: '4.png', name: '경주' },
    { image: '5.png', name: '남산타워' },
    { image: '6.png', name: '창덕궁' },
    { image: '7.png', name: '화성' },
    { image: '8.png', name: '한옥마을' },
    { image: '9.png', name: '남산골' },
    { image: '10.png', name: '여수' },
  ];
  const [selectedCity, setSelectedCity] = useState(null);
  const [nowIndex, setNowIndex] = useState(null);

  const handleCityClick = (index) => {
    if(nowIndex !== index){
      const nameString = cities[index].name;
      setSelectedCity(index);
      onForm3Change(nameString);
    } else {
      setSelectedCity(null);
      onForm3Change('');
    }
    setNowIndex(index);
  };

  return (
    <>
      <Box h={'40px'} mt={1} mx="75px" mb={6} pos={'absolute'}>
        <Text color={'black.500'} fontWeight={800} fontSize={'40px'} letterSpacing={1.1}>
          주요도시 설정하기
        </Text>
      </Box>
      <Input mt='70px' placeholder='가고 싶은 곳을 직접 입력해 주세요' ml='75px' w='1450px' onChange={(e) => onForm3Change(e.target.value)}/>
      <SimpleGrid mt="10px" columns={5} spacing={5} mx={10}>
        {cities.map((city, index) => (
          <CityBox
            key={index}
            image={city.image}
            name={city.name}
            selected={selectedCity === index}
            onClick={() => handleCityClick(index)}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default function Multistep() {
  const toast = useToast()
  const router = useRouter();
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
  const [selectedStartDate, setSelectedStartDate] = useState(new Date())
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const [selectedWho, setSelectedWho] = useState([])
  const [selectedStyle, setSelectedStyle] = useState([])
  const [selectedCity, setSelectedCity] = useState('')

  const handleForm1 = (start, end) => {
    setSelectedStartDate(start);
    setSelectedEndDate(end);
  };

  const handleForm2 = (who, style) => {
    setSelectedWho(who);
    setSelectedStyle(style);
  }

  const handleForm3 = (city) => {
    setSelectedCity(city);
  }

  const handleSubmit = async () => {
    let userId = localStorage.getItem('id')
    console.log(userId);
    const planDate = {
        userId : userId,
        who: selectedWho,
        styles: selectedStyle,
        startday : selectedStartDate,
        enddate : selectedEndDate,
        city : selectedCity,
    };
    try {
        const response = await axios.post('./api/createplan', planDate);
        console.log(response.data);
        localStorage.setItem('plan', response.data.plan._id);
        if (response.status == 200) {
            router.push('/plan');
        } else {
            console.error('Already exist id', response.data.message);
            toast({
                title: '데이터 전송 중 오류가 생겼습니다.',
                description: response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    } catch (error) {
        console.error('Error during sign up:', error.message);
        toast({
            title: '에러',
            description: '오류가 발생했습니다.',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
    }
  };

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
        <Progress hasStripe value={progress} mb="1%" mx="5%" mt= "2%" isAnimated></Progress>
        {step === 1 ? <Form1 onForm1Change={handleForm1}/> : step === 2 ? <Form2 onForm2Change={handleForm2}/> : <Form3 onForm3Change={handleForm3}/>}
        <ButtonGroup w="100%" position='absolute' bottom="8%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="6rem"
                mr="5%"
                ml="75px">
                Back
              </Button>
              <Button
                w="6rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="6rem"
                mr="5%"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
      </Center>
    </Layout>
  )
}