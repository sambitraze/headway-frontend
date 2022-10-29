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

export default function Registerationpaused() {

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
                            Registeration Paused
                        </Heading>
                    </Stack>
                </Stack>
            </Flex>
        </div>
    );
}
