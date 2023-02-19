import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {Box} from "@chakra-ui/react";
import { Home } from "./pages/Home";
function App() {

  return (
    <Box w="100vw" h="100vh">
      <Header/>
      <Home/>
      <Footer/>
    </Box>
  )
}

export default App
