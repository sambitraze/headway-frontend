import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Switch,
    HStack,
    Select,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function RegisterForm() {
    const [showWpPh, setShowWpPh] = useState(false);

    return (
        <Flex
            minH={'10vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Register
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool events ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address (Personal)</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <HStack>
                            <Box>
                                <FormControl id="roll" isRequired>
                                    <FormLabel>Roll</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="year">
                                    <FormLabel>Year</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="branch" isRequired>
                            <FormLabel>Branch</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>

                        {!showWpPh ? <Box>
                            <FormControl id="phone" isRequired>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box> : <HStack>
                            <Box>
                                <FormControl id="phone1" isRequired>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box> <Box>
                                <FormControl id="phone2" isRequired>
                                    <FormLabel>Whatsapp Number</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>}

                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Phone number is same as Whatsapp number?
                            </FormLabel>
                            <Switch id='email-alerts' isChecked={showWpPh} onChange={(e) => {
                                setShowWpPh(!showWpPh);
                            }} />
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Register
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}