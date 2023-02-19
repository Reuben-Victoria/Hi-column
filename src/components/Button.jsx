import { Button, HStack, Stack, Icon } from "@chakra-ui/react"

export function ButtonContents ({children, ...rest}) {
    return(
        <Stack {...rest}>
            {children}
        </Stack>
    )
}
export function ButtonStore ({icon, children, ...rest}) {
    return(
        <Button  borderRadius={"7.81px"} px={"0.75rem"} width={"166.41px"} height={["null", "null","3.00rem"]} pt={"0.5635rem"} pb={"0.5635rem"} overflow={"hidden"} colorScheme={"gray"} textAlign={"left"} {...rest}>
            <HStack spacing={"0.675rem"}>
                <Icon as={icon}/>
                <ButtonContents>{children}</ButtonContents>
            </HStack>
        </Button>
    )
}