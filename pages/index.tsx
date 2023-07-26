import {
    Flex,
    Box,
    FormControl,
    Input,
    FormLabel,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function SignupCard() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassWord] = useState('');
    const toast = useToast();

    const loginSignUp = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, name, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('id', data.user._id)
                router.push('/explore');
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
                toast({
                    title: '잘못된 아이디나 비밀번호 입니다.',
                    description: errorData.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error('Error:', error);
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
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Traveler
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        여행의 추억을 아름답게 만들기 위해 ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={3}>
                        <FormControl id="Your ID" isRequired>
                            <FormLabel>ID</FormLabel>
                            <Input type="text"
                                placeholder="Input your ID"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="Your nickname" isRequired>
                            <FormLabel>Nickname</FormLabel>
                            <Input type="text"
                                placeholder="Input your Nickname"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Input your password"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                    value={password}
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
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={loginSignUp}
                            >
                                Login
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Want to sign up?
                                <Link
                                    color={'blue.400'}
                                    href='getstarted'
                                >
                                    Sign Up
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}