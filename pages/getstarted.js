import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    HStack,
    Tag,
    Flex,
    FormLabel,
    FormControl,
    InputGroup,
    InputRightElement,
    SimpleGrid,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { color } from 'framer-motion';

export default function JoinOurTeam() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
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

    const handleSignUp = () => {
        
        router.push('/explore');
    };

    return (
        <Box
            position={'relative'}
            backgroundImage="url('signup1.png')"
            backgroundSize="cover"
            width="100%"
            height="100vh"
        >
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
            >
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Sign Up
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            친구들, 가족, 연인과의 여행계획을 짜고 싶을 때,<br />
                            소중한 추억들을 기록하고 싶을 때,<br />
                            좋은 여행 코스를 추천 받고 싶을 때,
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <FormControl id="Your ID" isRequired>
                                <FormLabel>ID</FormLabel>
                                <Input
                                    placeholder="Input your ID"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Input your passward"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormLabel spacing={4}>Who
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
                                            친구
                                        </Tag>
                                        <Tag 
                                            size='lg' 
                                            variant='solid' 
                                            mr={2}
                                            onClick={() => setcoupleClick((coupleClick)=>!coupleClick)}
                                            colorScheme = {coupleClick ? 'red' : 'teal'}
                                        >
                                            연인
                                        </Tag>
                                        <Tag 
                                            size='lg' 
                                            variant='solid'
                                            onClick={() => setlifeClick((lifeClick)=>!lifeClick)}
                                            colorScheme = {lifeClick ? 'red' : 'teal'}
                                        >
                                            배우자
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
                                            아이
                                        </Tag>
                                        <Tag 
                                            size='lg' 
                                            variant='solid' 
                                            mr={2}
                                            onClick={() => setparentsClick((parentsClick)=>!parentsClick)}
                                            colorScheme = {parentsClick ? 'red' : 'teal'}
                                        >
                                            부모님
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
                            <FormLabel spacing={4}>Styles
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
                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}
                            onClick={handleSignUp}
                        >
                            Sign up
                        </Button>
                    </Box>
                    form
                </Stack>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Senior web designers{' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            &
                        </Text>{' '}
                        Full-Stack Developers
                    </Heading>
                </Stack>
            </Container>
        </Box>
    );
}
