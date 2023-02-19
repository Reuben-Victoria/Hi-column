import { Hamburger } from "../icons/Icons";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton,ModalBody, useDisclosure, Icon } from "@chakra-ui/react"
export const HeaderModal =({ children, ...rest})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        < >
         <Icon as={Hamburger} onClick={onOpen}/>
      <Modal isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalOverlay />
        <ModalContent  h="80vh" w={"100vw"}>
          <ModalCloseButton />
          <ModalBody>
             {children}
          </ModalBody>
        </ModalContent>
        </Modal>
        </>
    )
}