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
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  StatHelpText,
  StatArrow,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function RegisterForm() {
  const [showWpPh, setShowWpPh] = useState(false);
  const [formNumber, setFormNumber] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [phone, setPhone] = useState("");
  const [planType, setPlanType] = useState("1");
  const [foodOpted, setFoodOpted] = useState(false);
  const [totalFare, setTotalFare] = useState(99.0);
  const [txnId, setTxnId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [regError, setRegError] = useState(false);

  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [rollError, setRollError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [whatsappError, setWhatsappError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [txnIdError, setTxnIdError] = useState(false);

  const chkField2 = () => {
    setTxnIdError(false);
    let isField2Valid = false;
    if (txnId.length < 10) {
      setTxnIdError(true);
      isField2Valid = true;
    }
    if (isField2Valid) {
      setFormNumber(2);
    } else {
      let planDescription = "";
      if (planType === "1") {
        planDescription =
          "Basic Entry ( Opening & Closing Ceremony + Extra Events ) = ₹99";
        if (foodOpted) {
          planDescription += " + ₹499 (Food) Grand Total = ₹598";
        }
      } else if (planType === "2") {
        planDescription =
          "Basic Entry ( Opening & Closing Ceremony + Extra Events ) & Sub Events = ₹248";
        if (foodOpted) {
          planDescription += " + ₹499 (Food) Grand Total = ₹747";
        }
      } else if (planType === "3") {
        planDescription =
          "Basic Entry ( Opening & Closing Ceremony + Extra Events ) & Main Event = ₹399";
        if (foodOpted) {
          planDescription += " + ₹499 (Food) Grand Total = ₹899 after discount";
        }
      } else if (planType === "4") {
        planDescription =
          "Basic Entry ( Opening & Closing Ceremony + Extra Events ) & Main Event + Sub Events = ₹549";
        if (foodOpted) {
          planDescription += " + ₹499 (Food) Grand Total = ₹999 after discount";
        }
      }
      const data = {
        first_name: firstName,
        last_name: lastName,
        email_personal: email,
        id: roll,
        branch: branch,
        year: year,
        wp_number: whatsapp,
        ph_number: phone,
        email_kiit: roll + "@kiit.ac.in",
        plan_type: planType,
        food_opted: foodOpted,
        total_fare: totalFare,
        txn_id: txnId,
        plan_description: planDescription,
      };
      fetch("https://api.iotkiit.in/items/innovance_registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (data.data !== undefined) {
            setFormNumber(3);
          } else if (data.errors.length > 0) {
            setRegError(true);
            if (data.errors[0].message.includes("id")) {
              setErrorMessage("Roll number already registered");
            } else {
              setErrorMessage(
                "Error in registraion data! " + data.errors[0].message
              );
            }
            setFormNumber(2);
          } else {
            setFormNumber(2);
          }
        });
    }
  };

  const chkField1 = () => {
    setFirstNameError(false);
    setEmailError(false);
    setRollError(false);
    setBranchError(false);
    setYearError(false);
    setWhatsappError(false);
    setPhoneError(false);
    let isField1Valid = false;

    if (firstName.length < 2) {
      setFirstNameError(true);
      isField1Valid = true;
    }
    if (email.length < 2) {
      setEmailError(true);
      isField1Valid = true;
    }
    if (roll.length < 7) {
      setRollError(true);
      isField1Valid = true;
    }
    if (branch.length < 1) {
      setBranchError(true);
      isField1Valid = true;
    }
    if (year != "1" && year != "2" && year != "3" && year != "4") {
      setYearError(true);
      isField1Valid = true;
    }
    if (whatsapp.length < 10) {
      setWhatsappError(true);
      isField1Valid = true;
    }
    if (phone.length < 10) {
      setPhoneError(true);
      isField1Valid = true;
    }
    if (isField1Valid) {
      setFormNumber(0);
    } else {
      setFormNumber(1);
    }
  };

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
            <Text fontSize={"lg"} color={"gray.00"}>
              to enjoy all of our cool events ✌️
            </Text>
          </Stack>
          <Progress
            value={(formNumber + 1) * 25.0}
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
                    <FormControl
                      id="firstName"
                      isRequired
                      isInvalid={firstNameError}
                    >
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                      {!firstNameError ? (
                        ""
                      ) : (
                        <FormErrorMessage>This is required.</FormErrorMessage>
                      )}
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
                <FormControl id="email" isRequired isInvalid={emailError}>
                  <FormLabel>Email address (Personal)</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {!emailError ? (
                    ""
                  ) : (
                    <FormErrorMessage>This is required.</FormErrorMessage>
                  )}
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl id="roll" isRequired isInvalid={rollError}>
                      <FormLabel>Roll No.</FormLabel>
                      <Input
                        type="text"
                        value={roll}
                        onChange={(e) => {
                          setRoll(e.target.value);
                        }}
                      />
                      {!rollError ? (
                        ""
                      ) : (
                        <FormErrorMessage>This is required.</FormErrorMessage>
                      )}
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="year" isRequired isInvalid={yearError}>
                      <FormLabel>Year</FormLabel>
                      <Select
                        value={year}
                        placeholder="Select year"
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
                      >
                        {/* <option value="1">1ST</option> */}
                        <option value="2">2ND</option>
                        <option value="3">3RD</option>
                        <option value="4">4TH</option>
                      </Select>
                      {!yearError ? (
                        ""
                      ) : (
                        <FormErrorMessage>This is required.</FormErrorMessage>
                      )}
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="branch" isRequired isInvalid={branchError}>
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
                  {!branchError ? (
                    ""
                  ) : (
                    <FormErrorMessage>This is required.</FormErrorMessage>
                  )}
                </FormControl>

                {showWpPh ? (
                  <Box>
                    <FormControl id="phone" isRequired isInvalid={phoneError}>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="text"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setWhatsapp(e.target.value);
                        }}
                      />
                      {!phoneError ? (
                        ""
                      ) : (
                        <FormErrorMessage>This is required.</FormErrorMessage>
                      )}
                    </FormControl>
                  </Box>
                ) : (
                  <HStack>
                    <Box>
                      <FormControl
                        id="phone1"
                        isRequired
                        isInvalid={phoneError}
                      >
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          type="text"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                        {!phoneError ? (
                          ""
                        ) : (
                          <FormErrorMessage>This is required.</FormErrorMessage>
                        )}
                      </FormControl>
                    </Box>{" "}
                    <Box>
                      <FormControl
                        id="phone2"
                        isRequired
                        isInvalid={whatsappError}
                      >
                        <FormLabel>Whatsapp No.</FormLabel>
                        <Input
                          type="text"
                          value={whatsapp}
                          onChange={(e) => {
                            setWhatsapp(e.target.value);
                          }}
                        />
                        {!whatsappError ? (
                          ""
                        ) : (
                          <FormErrorMessage>This is required.</FormErrorMessage>
                        )}
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
                      setWhatsapp(phone);
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
                      chkField1();
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
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    onClick={() => {
                      setFormNumber(0);
                    }}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Go to previous page
                  </Button>
                </Stack>
                <FormControl id="plan" isRequired>
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
                    <option value="1">
                      Basic Entry - ₹99 ( Opening & Closing Ceremony + Extra
                      Events )
                    </option>
                    <option value="2">Basic Entry & Sub Events - ₹248</option>
                    <option value="3">Basic Entry & Main Event - ₹448</option>
                    <option value="4">
                      Basic Entry & SubEvents & Main Event - ₹̷5̷9̷7̷ - ₹549
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
                  {planType === "3" && foodOpted ? (
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      5.12%
                    </StatHelpText>
                  ) : planType === "4" && foodOpted ? (
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      4.90%
                    </StatHelpText>
                  ) : (
                    <></>
                  )}
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
              <Modal
                isOpen={regError}
                onClose={(e) => {
                  setRegError(false);
                }}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Registraion Failed</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>{errorMessage}</Text>
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </ModalContent>
              </Modal>
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
                  Go to previous page
                </Button>
              </Stack>
              <Stack pt={6}></Stack>
              <Text fontSize="lg" as="u" color='tomato'>
                Please do an RTGS or NIFT Transaction using below details.
              </Text>
              <Stack pt={6}></Stack>
              <Stack spacing={4}>
                <HStack>
                  <Text fontSize="xl" as="b">
                    {" "}
                    Bank Account Name:{" "}
                  </Text>
                  <Text fontSize="xl"> KIIT UNIVERSITY</Text>
                </HStack>
                <HStack>
                  <Text fontSize="xl" as="b">
                    {" "}
                    Bank Name:{" "}
                  </Text>
                  <Text fontSize="xl"> CANARA BANK</Text>
                </HStack>
                <HStack>
                  <Text fontSize="xl" as="b">
                    {" "}
                    Account Number:{" "}
                  </Text>
                  <Text fontSize="xl"> 4915101003256</Text>
                </HStack>
                <HStack>
                  <Text fontSize="xl" as="b">
                    {" "}
                    Account type:{" "}
                  </Text>
                  <Text fontSize="xl"> SAVING</Text>
                </HStack>
                <HStack>
                  <Text fontSize="xl" as="b">
                    {" "}
                    Branch name:{" "}
                  </Text>
                  <Text fontSize="xl"> KIIT CAMPUS BRANCH</Text>
                </HStack>
                <HStack>
                  <Text fontSize="xl" as="b">
                    {" "}
                    IFSC Code:{" "}
                  </Text>
                  <Text fontSize="xl"> CNRB0004915</Text>
                </HStack>
                <Stack pt={6}></Stack><Text as="em" color='tomato'>
                  After the transaction please enter the transaction id below
                </Text>
                <FormControl id="email" isRequired isInvalid={txnIdError}>
                  <FormLabel>Transaction ID</FormLabel>
                  <Input
                    type="text"
                    value={txnId}
                    onChange={(e) => {
                      setTxnId(e.target.value);
                    }}
                  />
                  {!txnIdError ? (
                    ""
                  ) : (
                    <FormErrorMessage>This is required.</FormErrorMessage>
                  )}
                </FormControl>
                <text>
                  NB: If you want to pay offline or using any other method
                  please visit any one of our remote registration booth or our LAB
                  at DL007 campus 15 anytime between 11 am to 7 PM. For any
                  querry you can reach out to us on iotlab@kiit.ac.in
                </text>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    onClick={() => {
                      chkField2();
                    }}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Register
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
                    Confirmation Mail will be sent to you on your KIIT Email id
                    soon.✌️
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
          ) : (
            <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>Invalid Page</Stack>
            </Box>
          )}
        </Stack>
      </Flex>
    </div>
  );
}
