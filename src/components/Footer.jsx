import { Spacer, Stack, Flex, Text, Box, HStack } from "@chakra-ui/react";
import FooterLogo from "../assets/FooterLogo.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
export const Footer = () =>{
    return(
        <Stack as="footer" pt={["8.75rem","11.5rem"]}>
            <Box px={["1.5rem", "1.5rem", "122px"]} pb={["15","76px"]} w={"100%"}>
                <Flex direction={['column','column','row']}>
                    <Box pb={["1rem","1rem", "null"]}>
                        <Box pb={["1.5rem","39px"]}> 
                            <img src={FooterLogo} alt="loremgo"/>
                        </Box>
                        <Text fontWeight={"normal"} color={"#525A6C"} fontSize={["md","lg"]} w={"300px"}>2 Kudirat Abiola way, First bank bus stop, Oregun, Ikeja, Lagos,</Text>
                        <Text fontWeight={"normal"} color={"#525A6C"} fontSize={["md","lg"]}>Nigeria.</Text>
                    </Box>
                    <Spacer/>
                    <Box pb={["1rem","1rem", "null"]}>
                        <Text color={"#0B2253"} fontWeight={"700"} fontSize={"14px"} pb={["1rem","1rem","2rem"]}>QUICK LINKS</Text>
                          <Text fontWeight={"normal"} color={"#525A6C"} fontSize={"14px"} pb={"20px"}>Home</Text>
                          <Text fontWeight={"normal"} color={"#525A6C"} fontSize={"14px"} pb={"20px"}>Features</Text>
                          <Text fontWeight={"normal"} color={"#525A6C"} fontSize={"14px"} pb={"20px"}>Details</Text>
                          <Text fontWeight={"normal"} color={"#525A6C"} fontSize={"14px"} pb={"20px"}>Contact</Text>
                    </Box>
                    <Spacer/>
                    <Box pb={["1rem","1rem", "null"]}>
                        <Text  color={"#0B2253"} fontWeight={"700"} fontSize={"14px"} pb={["1rem","1rem","2rem"]}>LEGALS</Text>
                          <Text  fontWeight={"normal"} color={"#525A6C"} fontSize={"14px"} pb={"20px"}>Privacy Policy</Text>
                          <Text  fontWeight={"normal"} color={"#525A6C"} fontSize={"14px"} pb={"20px"}>Terms of Service</Text>
                    </Box>
                    <Spacer/>
                    <Box>
                        <Text color={"#0B2253"} fontWeight={"700"} fontSize={["md","md","lg"]} pb={"1rem"}>CONTACT US</Text>
                          <Text fontWeight={"normal"} color={"#525A6C"} fontSize={["md","md","lg"]} w={"300px"} pb={"1rem"}>+234 [0] 802 345 6789</Text>
                          <Text fontWeight={"normal"} color={"#525A6C"} fontSize={["md","md","lg"]} w={"300px"} pb={"29px"}>contactusinfo@hicolumn.com</Text>
                          <Text fontWeight={"normal"} color={"#525A6C"} fontSize={["md","md","lg"]} w={"300px"} pb={"19px"}>Follow us</Text>
                          <Box>
                            <HStack>
                                <Box>
                                <img src={facebook} alt="Facebook"/>
                                </Box>
                               <Box>
                               <img src={linkedin} alt="Linkedin"/>
                               </Box>
                                <Box>
                                <img src={twitter} alt="Twitter"/>
                                </Box>
                            </HStack>
                          </Box>
                    </Box>
                </Flex>
            </Box>
            <Box px={["-1.5rem", "-1.5rem", "-122px"]} h={"1px"} w={"100%"} bg={"rgba(11, 34, 83, 0.33)"}></Box>
            <Box pt={"38px"} pb={"38px"} px={["1.5rem", "1.5rem", "122px"]}>
            <Text fontWeight={"normal"} color={"#525A6C"} fontSize={["md","md","lg"]} textAlign={["left", "left", "left"]}>
            Copyright © 2021 Hicolumn - All Rights Reserved.
            </Text>
            </Box>
        </Stack>
    )
}