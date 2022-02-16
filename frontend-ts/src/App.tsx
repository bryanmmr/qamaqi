import React from 'react';
import '@fontsource/raleway/300.css'
import '@fontsource/open-sans/700.css'

import { Box, Container } from "@chakra-ui/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Box bgColor={'#fff'}>
      <Container
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        maxW='container.xl'
        bgColor={'#fff'}
        minH={'100vh'}>
          <Header />
          <LandingPage />
          <Footer />
      </Container>
    </Box>
  );
}

export default App;
