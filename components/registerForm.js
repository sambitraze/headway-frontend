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
    Progress,
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
import RegisterPayment from './registerPayment';

export default function RegisterForm() {
    const [showWpPh, setShowWpPh] = useState(false);
    const [formNumber, setFormNumber] = useState(0);

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
                <Progress value={(formNumber + 1) * 25} size='xs' colorScheme='cyan' />
                <Heading fontSize={'2xl'} textAlign={'left'}>
                    {formNumber === 0 ? 'Personal Information' : formNumber === 1 ? 'Plan Information' : formNumber === 2 ? 'Payment' : 'Success'}
                </Heading>
                {formNumber === 0 ? <Box
                    rounded={'lg'}
                    bg={'gray.700'}
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
                                onClick={() => {
                                    setFormNumber(1);
                                }}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Choose your plan
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                        </Stack>
                    </Stack>
                </Box> : formNumber === 1 ? <Box
                    rounded={'lg'}
                    bg={'gray.700'}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="branch" isRequired>
                            <FormLabel>Plan Type</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='option1'>Basic Entry (Rs 99)</option>
                                <option value='option2'>Basic Entry + SubEvents + Extra Event (Rs 99 + 149) </option>
                                <option value='option2'>Basic Entry + Main Event (Rs 99 + 399) </option>
                                <option value='option2'>Basic Entry + SubEvents + Extra Event + Main Event (Rs 99 + 149 + 399) </option>
                            </Select>
                        </FormControl>
                        <FormControl id="branch" isRequired>
                            <FormLabel>Opting for Food Facility (Rs 599 for 3 days)</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='option2'>Yes</option>
                                <option value='option3'>No</option>
                            </Select>
                        </FormControl>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Event Merch(Extra Rs 399) ?
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
                                onClick={() => {
                                    setFormNumber(2);
                                }}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Procced to payment
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                        </Stack>
                    </Stack>
                </Box> : formNumber === 2 ? <Box
                    rounded={'lg'}
                    bg={'gray.700'}
                    boxShadow={'lg'}
                    p={8}>
                    <RegisterPayment />
                </Box> : <Box
                    rounded={'lg'}
                    bg={'gray.700'}
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
                                Choose your plan
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                        </Stack>
                    </Stack>
                </Box>}
            </Stack>
        </Flex>
    );
}