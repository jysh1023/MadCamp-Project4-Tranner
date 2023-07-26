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
  Heading,
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
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import DatePicker from './datepicker';

const Form1 = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <>
            <Box h={'40px'} mt={1} mx="75px" mb={6} pos={'absolute'}>
                <Text
                    color={'black.500'}
                    fontWeight={800}
                    fontSize={'40px'}
                    letterSpacing={1.1}>
                    여행일정 등록하기
                </Text>
            </Box>
            <HStack>
                <Box h={'full'} w = {'full'} pos={'flex'} mt='70px'>
                    <Text
                        color={'black.500'}
                        fontWeight={800}
                        fontSize={'20px'}
                        ml="75px"
                        letterSpacing={1.1}>
                        출발하는 날
                    </Text>
                    <DatePicker
                        margin-left="75px"
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        selectsDisabledDaysInRange
                        inline
                    />
                </Box>
            </HStack>
        </>
    )
}

const Form2 = () => {
  return (
    <>
        <Box h={'40px'} mt={1} mx="75px" mb={6} pos={'relative'}>
            <Text
                color={'black.500'}
                fontWeight={800}
                fontSize={'40px'}
                letterSpacing={1.1}>
                여행일정 등록하기
            </Text>
        </Box>
        <HStack>
            <Box h={'full'} w = {'50%'} pos={'relative'} alignItems={'center'} mt={3}>
                
            </Box>
            <Box h={'full'} w = {'50%'} pos={'relative'} alignItems={'center'} mt={3}>
                
            </Box>
        </HStack>
    </>
  )
}

const Form3 = () => {
  return (
    <>
        <Box h={'40px'} mt={1} mx="75px" mb={6} pos={'relative'}>
            <Text
                color={'black.500'}
                fontWeight={800}
                fontSize={'40px'}
                letterSpacing={1.1}>
                여행일정 등록하기
            </Text>
        </Box>
        <HStack>
            <Box h={'full'} w = {'50%'} pos={'relative'} alignItems={'center'} mt={3}>
                
            </Box>
            <Box h={'full'} w = {'50%'} pos={'relative'} alignItems={'center'} mt={3}>
                
            </Box>
        </HStack>
    </>
  )
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

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
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
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
                ml="85px">
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
                mr="15%"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
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