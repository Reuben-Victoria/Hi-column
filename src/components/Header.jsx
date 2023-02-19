import { Box, HStack, Spacer, Text, Flex, Show, Stack} from "@chakra-ui/react";
import homeHeader from "../assets/homeHeader.png";

import { HeaderModal } from "./Modal";

export const Header = () => {
    return(
        <Box as="header" pt={["20px", "20px", "25px"]}>
        <Box px={["1.5rem", "1.5rem", "122px"]}>
            <Flex align={"center"}>
                <Box w={["98px", "98px", "125.27px"]}>
                    <img src={homeHeader} alt="Header-image"/>
                </Box>
                <Spacer/>
                <Show above={"md"}>
                <Box as="nav" fontSize={["lg"]} >
                    <HStack as={"ul"} spacing={["0.75rem", "0.75rem", "14"]} >
                        <Text as={"li"} listStyleType={"none"} li>Home</Text>
                        <Text  as={"li"} listStyleType={"none"}>About Us</Text>
                        <Text  as={"li"} listStyleType={"none"}>Contact Us</Text>
                    </HStack>
                </Box>
                </Show>
                <Show below={"lg"}>
            
                    <HeaderModal> 
                    <Box as="nav" fontSize={["lg"]}  >
                    <Stack as={"ul"} spacing={["0.75rem", "0.75rem", "14"]} >
                        <Text as={"li"} listStyleType={"none"} li>Home</Text>
                        <Text  as={"li"} listStyleType={"none"}>About Us</Text>
                        <Text  as={"li"} listStyleType={"none"}>Contact Us</Text>
                    </Stack>
                </Box>
                </HeaderModal>
                </Show>
            </Flex>
        </Box>
        </Box>
    )
}