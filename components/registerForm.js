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
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function RegisterForm() {
  const [showWpPh, setShowWpPh] = useState(false);
  const [formNumber, setFormNumber] = useState(0);
  const [firstName, setFirstName] = useState("Sambit");
  const [lastName, setLastName] = useState("Majhi");
  const [email, setEmail] = useState("majhisambit2@gmail.com");
  const [roll, setRoll] = useState("1906422");
  const [branch, setBranch] = useState("IT");
  const [year, setYear] = useState("4th");
  const [whatsapp, setWhatsapp] = useState("+917751992236");
  const [phone, setPhone] = useState("+917751992236");
  const [planType, setPlanType] = useState("1");
  const [foodOpted, setFoodOpted] = useState(false);
  const [merchOpted, setMerchOpted] = useState(false);

  const initiatePayment = async () => {
    let amount = 100;
    let oid = Math.floor(Math.random() * Date.now());
    const data = {
      amount,
      oid,
      email,
    };
    let initiatePaymentResponse = await fetch("/api/pretransaction", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let txnTokenResponse = await initiatePaymentResponse.json();
    txnTokenResponse = JSON.parse(txnTokenResponse);
    console.log("flag1");
    let defaultMerchantConfiguration = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: oid,
        token: txnTokenResponse.body.txnToken,
        tokenType: "TXN_TOKEN",
        amount: amount,
        userDetail: {
          mobileNumber: phone,
          name: firstName + " " + lastName,
        },
      },
      // labels: {},
      // payMode: {
      //   labels: {},
      //   filter: [],
      //   order: [],
      // },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };
    window.Paytm.CheckoutJS.init(defaultMerchantConfiguration)
      .then(function onSuccess() {
        window.Paytm.CheckoutJS.invoke();
      })
      .catch(function onError(error) {
        console.log("error => ", error);
      });
  };

  const onScriptLoad = () => {};
  useEffect(() => {}, []);

  return (
    <div>
      <Flex
        minH={"10vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
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
            value={(formNumber + 1) * 33.33}
            size="xs"
            colorScheme="cyan"
          />
          <Heading fontSize={"2xl"} textAlign={"left"}>
            {formNumber === 0
              ? "Personal Information"
              : formNumber === 1
              ? "Plan Information"
              : formNumber === 2
              ? "Payment"
              : "Success"}
          </Heading>
          {formNumber === 0 ? (
            <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
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
                  <FormLabel>Email address (Personal)</FormLabel>
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
                    <option value="EEE">EEE</option>
                    <option value="ME">ME</option>
                    <option value="CE">CE</option>
                    <option value="MME">MME</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="MTECH">MTECH</option>
                    <option value="PHD">PHD</option>
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
                        <FormLabel>Whatsapp Number</FormLabel>
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
                    }}
                  >
                    <option value="1">Basic Entry (Rs 99)</option>
                    <option value="2">
                      Basic Entry + SubEvents + Extra Event (Rs 99 + 149){" "}
                    </option>
                    <option value="3">
                      Basic Entry + Main Event (Rs 99 + 399){" "}
                    </option>
                    <option value="4">
                      Basic Entry + SubEvents + Extra Event + Main Event (Rs 99
                      + 149 + 399){" "}
                    </option>
                  </Select>
                </FormControl>
                <FormControl id="branch" isRequired>
                  <FormLabel>
                    Opting for Food Facility (Rs 599 for 3 days)
                  </FormLabel>
                  <Switch
                    id="foodOpted"
                    isChecked={foodOpted}
                    onChange={(e) => {
                      setFoodOpted(!foodOpted);
                    }}
                  />
                </FormControl>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Event Merch(Extra Rs 399) ?
                  </FormLabel>
                  <Switch
                    id="merchOpted"
                    isChecked={merchOpted}
                    onChange={(e) => {
                      setMerchOpted(!merchOpted);
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
                      // setFormNumber(2);
                      initiatePayment();
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
          ) : (
            <Box></Box>
          )}
        </Stack>
      </Flex>
    </div>
  );
}
