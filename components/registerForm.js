import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Switch,
    HStack,
    Select,
    Progress,
    Stack,
    Button,
    Heading,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function RegisterForm() {
    const [showWpPh, setShowWpPh] = useState(false);
    const [formNumber, setFormNumber] = useState(0);
    const [fitName, setFitName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [roll, setRoll] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [phone, setPhone] = useState("");
    const [planType, setPlanType] = useState("1");
    const [foodOpted, setFoodOpted] = useState(false);
    const [totalFare, setTotalFare] = useState(99.00);
    const [txnId, setTxnId] = useState("");

    useEffect(() => { }, []);

    return (
        <div>
            <Flex
                minH={"10vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.800")}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                            Register
                        </Heading>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            to enjoy all of our cool events ✌️
                        </Text>
                    </Stack>
                    <Progress
                        value={(formNumber + 1) * 25.00}
                        size="xs"
                        colocheme={"cyan"}
                    />
                    <Heading fontSize={"2xl"} textAlign={"left"}>
                        {formNumber === 0
                            ? "Personal Information"
                            : formNumber === 1
                                ? "Plan Information"
                                : formNumber === 2
                                    ? "Payment Info"
                                    : ""}
                    </Heading>
                    {formNumber === 0 ? (
                        <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
                            <Stack spacing={4}>
                                <HStack>
                                    <Box>
                                        <FormControl id="fitName" isRequired>
                                            <FormLabel>Fit Name</FormLabel>
                                            <Input
                                                type="text"
                                                value={fitName}
                                                onChange={(e) => {
                                                    setFitName(e.target.value);
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="lastName">
                                            <FormLabel>Last Name</FormLabel>
                                            <Input
                                                type="text"
                                                value={lastName}
                                                onChange={(e) => {
                                                    setLastName(e.target.value);
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address (Peonal)</FormLabel>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <HStack>
                                    <Box>
                                        <FormControl id="roll" isRequired>
                                            <FormLabel>Roll</FormLabel>
                                            <Input
                                                type="text"
                                                value={roll}
                                                onChange={(e) => {
                                                    setRoll(e.target.value);
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="year" isRequired>
                                            <FormLabel>Year</FormLabel>
                                            <Select
                                                value={year}
                                                placeholder="Select year"
                                                onChange={(e) => {
                                                    setYear(e.target.value);
                                                }}
                                            >
                                                <option value="1st">1ST</option>
                                                <option value="2nd">2ND</option>
                                                <option value="3rd">3RD</option>
                                                <option value="4th">4TH</option>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <FormControl id="branch" isRequired>
                                    <FormLabel>Branch</FormLabel>
                                    <Select
                                        value={branch}
                                        placeholder="Select branch"
                                        onChange={(e) => {
                                            setBranch(e.target.value);
                                        }}
                                    >
                                        <option value="IT">IT</option>
                                        <option value="CSE">CSE</option>
                                        <option value="CSSE">CSSE</option>
                                        <option value="CSCE">CSCE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="ECSE">ECSE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="ME">ME</option>
                                        <option value="CE">CE</option>
                                        <option value="MME">MME</option>
                                        <option value="MCA">MCA</option>
                                        <option value="MBA">MBA</option>
                                        <option value="BBA">BBA</option>
                                        <option value="MTECH">MTECH</option>
                                        <option value="PHD">PHD</option>
                                        <option value="OTHER">OTHER</option>
                                    </Select>
                                </FormControl>

                                {showWpPh ? (
                                    <Box>
                                        <FormControl id="phone" isRequired>
                                            <FormLabel>Phone Number</FormLabel>
                                            <Input
                                                type="text"
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value);
                                                    setWhatsapp(e.target.value);
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                ) : (
                                    <HStack>
                                        <Box>
                                            <FormControl id="phone1" isRequired>
                                                <FormLabel>Phone Number</FormLabel>
                                                <Input
                                                    type="text"
                                                    value={phone}
                                                    onChange={(e) => {
                                                        setPhone(e.target.value);
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>{" "}
                                        <Box>
                                            <FormControl id="phone2" isRequired>
                                                <FormLabel>Whatsapp No.</FormLabel>
                                                <Input
                                                    type="text"
                                                    value={whatsapp}
                                                    onChange={(e) => {
                                                        setWhatsapp(e.target.value);
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                    </HStack>
                                )}

                                <FormControl display="flex" alignItems="center" isRequired>
                                    <FormLabel htmlFor="email-alerts" mb="0">
                                        Phone number is same as Whatsapp number?
                                    </FormLabel>
                                    <Switch
                                        id="email-alerts"
                                        isChecked={showWpPh}
                                        onChange={(e) => {
                                            setShowWpPh(!showWpPh);
                                        }}
                                    />
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={"blue.400"}
                                        color={"white"}
                                        onClick={() => {
                                            setFormNumber(1);
                                        }}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                        Choose your plan
                                    </Button>
                                </Stack>
                                <Stack pt={6}></Stack>
                            </Stack>
                        </Box>
                    ) : formNumber === 1 ? (
                        <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
                            <Stack spacing={4}>
                                <FormControl id="branch" isRequired>
                                    <FormLabel>Plan Type</FormLabel>
                                    <Select
                                        value={planType}
                                        onChange={(e) => {
                                            setPlanType(e.target.value);
                                            if (!foodOpted) {
                                                if (e.target.value === "1") {
                                                    setTotalFare(99);
                                                } else if (e.target.value === "2") {
                                                    setTotalFare(248);
                                                } else if (e.target.value === "3") {
                                                    setTotalFare(448);
                                                } else if (e.target.value === "4") {
                                                    setTotalFare(549);
                                                }
                                            } else {
                                                if (e.target.value === "1") {
                                                    setTotalFare(99 + 499);
                                                } else if (e.target.value === "2") {
                                                    setTotalFare(248 + 499);
                                                } else if (e.target.value === "3") {
                                                    setTotalFare(899);
                                                } else if (e.target.value === "4") {
                                                    setTotalFare(999);
                                                }
                                            }
                                        }}
                                    >
                                        <option value="1">Basic Entry - ₹99 ( Opening & Closing Ceremony + Extra Events )</option>
                                        <option value="2">
                                            Basic Entry & Sub Events - ₹248
                                        </option>
                                        <option value="3">
                                            Basic Entry & Main Event - ₹448
                                        </option>
                                        <option value="4">
                                            Basic Entry & SubEvents & Main Event - ₹̷5̷9̷7̷   - ₹549
                                        </option>
                                    </Select>
                                </FormControl>
                                <FormControl id="branch" isRequired>
                                    <FormLabel>
                                        Opting for Food Facility ( ₹499 for 3 days)
                                    </FormLabel>
                                    <Switch
                                        id="foodOpted"
                                        isChecked={foodOpted}
                                        onChange={(e) => {
                                            if (foodOpted) {
                                                if (planType === "1") {
                                                    setTotalFare(99);
                                                } else if (planType === "2") {
                                                    setTotalFare(248);
                                                } else if (planType === "3") {
                                                    setTotalFare(448);
                                                } else if (planType === "4") {
                                                    setTotalFare(549);
                                                }
                                            } else {
                                                if (planType === "1") {
                                                    setTotalFare(99 + 499);
                                                } else if (planType === "2") {
                                                    setTotalFare(248 + 499);
                                                } else if (planType === "3") {
                                                    setTotalFare(899);
                                                } else if (planType === "4") {
                                                    setTotalFare(999);
                                                }
                                            }
                                            setFoodOpted(!foodOpted);
                                        }}
                                    />
                                </FormControl>
                                <Stat>
                                    <StatLabel>Total Fee</StatLabel>
                                    <StatNumber>₹ {totalFare.toFixed(2)}</StatNumber>
                                    {planType === "3" && foodOpted ? <StatHelpText>
                                        <StatArrow type='decrease' />
                                        5.12%
                                    </StatHelpText> : planType === "4" && foodOpted ? <StatHelpText>
                                        <StatArrow type='decrease' />
                                        4.90%
                                    </StatHelpText> : <></>}
                                </Stat>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={"blue.400"}
                                        color={"white"}
                                        onClick={() => {
                                            setFormNumber(2);
                                        }}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                        Procced to payment
                                    </Button>
                                </Stack>
                                <Stack pt={6}></Stack>
                            </Stack>
                        </Box>
                    ) : formNumber === 2 ? (
                        <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
                            <Stack spacing={4}>
                                <HStack>
                                    <Text fontSize='xl' as="b"> Bank Account Name: </Text>
                                    <Text fontSize='xl'> KIIT UNIVERSITY</Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize='xl' as="b"> Bank Name: </Text>
                                    <Text fontSize='xl'> CANARA BANK</Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize='xl' as="b"> Account Number: </Text>
                                    <Text fontSize='xl'> 4915101003256</Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize='xl' as="b"> Account type: </Text>
                                    <Text fontSize='xl'> SAVING</Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize='xl' as="b"> Branch name: </Text>
                                    <Text fontSize='xl'> KIIT CAMPUS BRANCH</Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize='xl' as="b"> IFSC Code: </Text>
                                    <Text fontSize='xl'> CNRB0004915</Text>
                                </HStack>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Transaction ID</FormLabel>
                                    <Input
                                        type="text"
                                        value={txnId}
                                        onChange={(e) => {
                                            setTxnId(e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={"blue.400"}
                                        color={"white"}
                                        onClick={() => {
                                            setFormNumber(3);
                                        }}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                        Procced
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    ) : formNumber === 3 ? (
                        <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
                            <Stack spacing={4}>
                                <Stack align={"center"}>
                                    <Heading fontSize={"4xl"} textAlign={"center"}>
                                        Thank You for registering!
                                    </Heading>
                                    <br></br>
                                    <Text fontSize={"lg"} textAlign={"center"}>
                                        Confirmation Mail will be sent to you on your KIIT Email id soon.✌️
                                    </Text>
                                </Stack>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={"blue.400"}
                                    color={"white"}
                                    onClick={() => {
                                        window.location.href = "https://iotkiit.in";
                                    }}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                >
                                    Visit Home Page
                                </Button>
                            </Stack>
                        </Box>
                    ) : <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
                        <Stack spacing={4}>Invalid Page</Stack>
                    </Box>}
                </Stack>
            </Flex>
        </div>
    );
}
