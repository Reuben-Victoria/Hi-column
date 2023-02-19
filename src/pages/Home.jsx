import { Box, Flex, Grid, GridItem, HStack, Icon, Spacer, Text, Stack, VStack } from "@chakra-ui/react";
import { PlayStore, Store, Delivery, AppleStore, Sales, Listings, Airplane, Bills, Search, Square } from "../icons/Icons";
import home1 from "../assets/home1.png";
import Hands from "../assets/Hands.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import { ButtonContents, ButtonStore } from "../components/Button";
export const StackedComponent = ({icon, children, ...rest}) =>{
  return(
      <HStack as={"li"} spacing={[3,3,5]} mx={"auto"} {...rest}>
        <Icon  w={["0.5rem",'0.75rem']} h={["0.5rem",'0.75rem']} as={icon}/>
        <Text textAlign={["justify", "justify", "normal"]} as={"p"} fontWeight={"medium"} fontSize={["xs","xs","lg"]} w={["null","null","967px"]} color={"#ffff"}>{children}</Text>
      </HStack>
  )
}
export function Home() {
  return (
    <Box pt={"1.6875rem"} px={["1.5rem", "1.5rem", "122px"]}>
      <Box as='main' pb={["2.5rem","2.5rem","9.6875rem"]} >
        <Flex direction={['column','column','row']} alignContent={["normal", "normal", "center"]} justifyContent={["normal", "normal", "center"]}>
          <Box alignSelf={["null", "null","center"]}>
            <Text color={"#0B2253"} w={["null","null", "584px"]} textAlign={["center", "center", "left"]} fontSize={["2.5rem","2.5rem", "4.5rem"]} lineHeight={["3rem", "3rem", "4.5rem"]} fontWeight={"bold"} as={"h2"}>Buying & selling made easy</Text>
            <Text w={["null","null", "408px"]} as={"p"} textAlign={["center", "center", "left"]} pt='1rem' pb='3.5rem'>
              Join hundreds of users who trust Hicolumn E-commerce to shop
              online.
            </Text>
            <HStack justifyContent={[ "center","center","normal"]} mx={"0, auto"}  spacing={"1.0625rem"}>
            <ButtonStore icon={PlayStore}>
              <ButtonContents>
              <Text as={"p"} fontSize={"0.625rem"}>Download on</Text>
              <Text as={"h3"} fontSize={"1rem"}>Google Play</Text>
              </ButtonContents>
            </ButtonStore>
            <ButtonStore icon={AppleStore}>
              <ButtonContents>
              <Text as={"p"} fontSize={"0.625rem"}>Download on the</Text>
              <Text as={"h3"} fontSize={"1rem"}>AppleStore</Text>
              </ButtonContents>
            </ButtonStore>
            </HStack>
          </Box>
          <Spacer/>
          <Box mt={["2.0rem", "2.0rem","null"]} w={["normal", "normal", "488px"]} h={["normal", "normal", "578px"]}>
            <img src={home1} style={{width:"488px"}}/>
          </Box>
        </Flex>
      </Box>
      <Box mx={"auto"} pb={["2.5rem","2.5rem","7.6875rem"]}>
        <Text as={"h3"} fontWeight={"semibold"} textAlign={"center"} fontSize={["3xl", "3xl", "4xl"]} pb={["0.8rem","0.8rem","1rem"]}>
          How it Works
        </Text>
        <Text mx={"auto"} fontWeight={"normal"} fontSize={["0.75rem","0.75rem","1rem"]} textAlign={"center"} width={["normal","normal","661px"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tortor, pellentesque donec ut accumsan nibh turpis massa facilisis pellentesque amet.</Text>
      </Box>
      <Box pb={["2.5rem","2.5rem","8.5625rem"]}>
        <Grid templateColumns={["1", "1" , "repeat(3, 1fr)"]} gap={"3.4375rem"} >
          <GridItem mx={"auto"}>
            <Icon as={Store} w={["2.0rem", "2.0rem","2.5rem"]} h={["2.0rem", "2.0rem","2.5rem"]} />
            <Text as={"h3"} fontWeight={"semibold"} pt={"1.875rem"} pb={["0.8rem","0.8rem","1rem"]} color={"#0B2253"} fontSize={["1.5rem","1.5rem","1.75rem"]}>Create store & list your product</Text>
            <Text color={"#525A6C"} fontSize={["0.75rem","0.75rem","1rem"]}  fontWeight={"normal"}>Download the app and create your store by entering store details.
              turpis eu massa, consectetur adipiscing tortor benelit. </Text>
          </GridItem>
          <GridItem>
            <Icon as={Delivery} w={["2.0rem", "2.0rem","2.5rem"]} h={["2.0rem", "2.0rem","2.5rem"]}/>
            <Text as={"h3"} fontWeight={"semibold"} pt={"1.875rem"} pb={["0.8rem","0.8rem","1rem"]} color={"#0B2253"} fontSize={["1.5rem","1.5rem","1.75rem"]}>Add your community delivery partner</Text>
            <Text color={"#525A6C"} fontSize={["0.75rem","0.75rem","1rem"]} fontWeight={"normal"}>Create your products, set your own prices, and make them available for purchase. accumsan nibh turpis eu massa, consectetur adipiscing tortor benelit. </Text>
          </GridItem>
          <GridItem>
            <Icon as={Sales} w={["2.0rem", "2.0rem","2.5rem"]} h={["2.0rem", "2.0rem","2.5rem"]}/>
            <Text as={"h3"} pb={["0.8rem","0.8rem","1rem"]} pt={"1.875rem"} fontWeight={"semibold"} color={"#0B2253"} fontSize={["1.5rem","1.5rem","1.75rem"]}>Sell with ease 
            to buyers online</Text>
            <Text color={"#525A6C"} fontSize={["0.75rem","0.75rem","1rem"]} fontWeight={"normal"}>Create your products, set your own prices, and make them available for purchase. accumsan nibh turpis eu massa, consectetur adipiscing tortor benelit. </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box mb={["4.75rem","4.75rem","10.375rem"]}>
        <img src={home2} alt="text"/>
      </Box>
      <Box mx={["-1.5rem", "-1.5rem", "-122px"]} pt={["4rem", "4rem", "8.75rem"]} mb={["4.75rem","4.75rem","10.375rem"]} bg="#D7E4F8">
        <Flex direction={["column", "column", "row"]}>
          <Box mx={["1.5rem", "1.5rem", "122px"]}>
            <Text as={"h3"} fontWeight={"semibold"} fontSize={["1.375rem","1.375rem","2.375rem"]} pb={"1rem"} >App Features</Text>
            <Text as={"p"} fontSize={["0.75rem","0.75rem","1rem"]}  w={["null","null","617px"]} textAlign={["normal","normal", "left"]}>Get the best deals & cash back from your favorite stores near you using the Hicolumn App. Sign up now, it’s totally free.</Text>
            <Grid templateColumns={["1","1", "repeat(2, 304px)"]} gap={8} pt={"5.125rem"}>
              <GridItem>
                <Icon as={Listings} w={"3rem"} h={"3rem"}/>
                <Text fontWeight={"semibold"} fontSize={"1rem"} pb={"0.5rem"}>Store Listings</Text>
                <Text fontWeight={"normal"} color={"#525A6C"}>Shop from registered Stores/merchant closest to you.</Text>
              </GridItem>
              <GridItem>
                <Icon as={Airplane} w={"3rem"} h={"3rem"}/>
                <Text fontWeight={"semibold"} fontSize={["0.75rem","0.75rem","1rem"]} pb={"0.5rem"}>Flight Booking</Text>
                <Text fontWeight={"normal"} color={"#525A6C"}>This contains a list of product available in a particular store/Merchant, and you can buy from your trusted store.</Text>
              </GridItem>
              <GridItem>
                <Icon as={Bills} w={"3rem"} h={"3rem"}/>
                <Text fontWeight={"semibold"} fontSize={["0.75rem","0.75rem","1rem"]} pb={"0.5rem"}>Bills Payment</Text>
                <Text fontWeight={"normal"} color={"#525A6C"}>With Hicolumn you can easily search for a product on a store using the search and filter features.</Text>
              </GridItem>
              <GridItem>
                <Icon as={Search} w={"3rem"} h={"3rem"}/>
                <Text fontWeight={"semibold"} fontSize={["0.75rem","0.75rem","1rem"]} pb={"0.5rem"}>Easy product Search</Text>
                <Text fontWeight={"normal"} color={"#525A6C"}>This contains a list of product available in a particular store/Merchant, and you can buy from your trusted store.</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box>
            <img src={Hands} alt="Hand" />
          </Box>
        </Flex>
      </Box>
      <Box bg="#041237" mt={["8.75rem","8.75rem","20.850rem"]} pb={["4rem","4rem", "null" ]}  h={["null", "null","900px"]} mx={["-1.5rem", "-1.5rem","-122px"]} mb={["4.75rem","4.75rem","10.375rem"]}>
        <VStack>
          <Box mt={["-65px","-65px","-150px"]} w={["83%", "83%", "null"]}>
            <img src={home2} alt="play"/>
          </Box>
          <Box px={["1rem","1rem","1rem"]}>
            <Text pb="2rem" fontSize={["2xl","2xl","5xl"]} textAlign={["center", "center", "normal"]} fontWeight={"semibold"} color={"white"}>Become a Community Delivery Partner(CDP)</Text>
            <Stack as={"ul"} spacing={"1.5rem"} >
              <StackedComponent icon={Square}>Our How about making up to ₦5,000 daily working for yourself and supporting the Local Businesses in your area where you live, work and play?</StackedComponent>
              <StackedComponent icon={Square}>Do you desire to be a Delivery Partner or own, organize or coordinate delivery fleets within your community, riding on the platform of Hicolumn e-commerce?</StackedComponent>
              <StackedComponent icon={Square}>Do you have a good relationship with Stores, Mosque, Church or Social Group(s) in your Community or have the capacity to initiate a good cordial relationship with the people in your Community and Market places?</StackedComponent>
            </Stack>
          </Box>
        </VStack>
      </Box>
      <Box>
        <Flex direction={["column", "column", "row"]}>
          <Box>
            <Text fontWeight={"semibold"} fontSize={["xs", "xs", "sm"]} color={"#1F6AEC"}>HICOLUMN MERCHANT</Text>
            <Text fontWeight={"bold"}  pb={["1.5rem", "1.5rem", "1.75rem"]} color={"#0B2253"} fontSize={["2rem", "2rem", "2.125rem"]} w={["null","null","25.75rem"]} lineHeight={["2.5rem", "2.5rem", "2.75rem"]}>Your online store is just a few clicks away.</Text>
            <Text fontWeight={"normal"} textAlign={["justify", "justify", "normal"]} fontSize={["0.85rem", "0.85rem", "1rem"]} w={["null","null","428px"]} color={"#525A6C"}>Merchants are given the tool that enables them become an active participant in the E-commerce space without having to own a website or have any delivery facility</Text>
            <Text fontWeight={"normal"} pt={["0.55rem", "0.55rem", "0.75rem"]} fontSize={["0.85rem", "0.85rem", "1rem"]} w={["null","null","428px"]} color={"#525A6C"} textAlign={["justify", "justify", "normal"]}>Hicolumn by design and operations ensures real comfort and quality convenience. It brings complete sense of security and assurance which has been lacking in oline trade for so long.</Text>
            <HStack justifyContent={[ "center","center","normal"]} mx={"0, auto"} mt={"3.25rem"}  spacing={"1.0625rem"}>
            <ButtonStore icon={PlayStore}>
              <ButtonContents>
              <Text as={"p"} fontSize={"0.625rem"}>Download on</Text>
              <Text as={"h3"} fontSize={"1rem"}>Google Play</Text>
              </ButtonContents>
            </ButtonStore>
            <ButtonStore icon={AppleStore}>
              <ButtonContents>
              <Text as={"p"} fontSize={"0.625rem"}>Download on the</Text>
              <Text as={"h3"} fontSize={"1rem"}>AppleStore</Text>
              </ButtonContents>
            </ButtonStore>
            </HStack>
          </Box>
          <Spacer/>
          <Box mt={["8.5rem","10.5rem","null"]}>
            <Box  mt={["-40px","-40px","-150px"]} ml={["58px","null","-150px"]}>
              <img src={home3} alt="sales"/>
            </Box>
            <Box mt={["-146px","-146px","-296px"]} width={["69%", "69%", "100%"]} ml={["10px","-11px","-290px"]}>
              <img src={home4} alt="sales"/>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
