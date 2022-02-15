import '@fontsource/raleway/300.css'
import '@fontsource/open-sans/700.css'

import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Container display={'flex'} flexDirection={'column'} justifyContent={'space-between'} maxW='container.xl' boxShadow={'lg'} minH={'100vh'}>
      <Header />
      <LandingPage />
      <Footer />
    </Container>
  );
}

export default App;
