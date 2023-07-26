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
    useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

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
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassWord] = useState('');
    const [who, setWho] = useState([]);
    const [styles, setStyles] = useState([]);
    const toast = useToast();

    let who_list = ['혼자', '친구와', '연인과', '배우자와', '아이와', '부모님과', '기타'];
    let who_select = [aloneClick, friendClick,coupleClick, lifeClick, childClick, parentsClick, etcClick];

    let styles_list = ['체험', '핫플', '힐링', '관광지', '문화,예술', '여행지', '쇼핑', '먹거리'];
    let styles_select =[activeClick, hotClick, healingClick, famousClick, artClick, travelClick, shopClick, foodClick];

    const handleSignUp = async () => {
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
    
        const userData = {
            id: id,
            name: name,
            password: password,
            who: selectedWho,
            styles: selectedStyles,
        };
    
        try {
            console.log(id, name, password, selectedWho, selectedStyles);
            const response = await axios.post('./api/signup', userData);
            localStorage.setItem('id', response.data.user._id);
            if (response.status == 200) {
                router.push('/explore');
            } else {
                console.error('Already exist id', response.data.message);
                toast({
                    title: '이미 존재하는 아이디입니다.',
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
                spacing={{ base: 8, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
            >
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={2}>
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
                    <Box as={'form'} mt={1}>
                        <Stack spacing={2}>
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
                                    value = {id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="Your nickname" isRequired>
                                <FormLabel>Nickname</FormLabel>
                                <Input
                                    placeholder="Input your Nickname"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                    value = {name}
                                    onChange={(e) => setName(e.target.value)}
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
                                        value = {password}
                                        onChange={(e) => setPassWord(e.target.value)}
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
                            mt={4}
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
