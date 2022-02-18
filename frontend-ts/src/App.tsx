import React from 'react';
import '@fontsource/raleway/300.css'
import '@fontsource/open-sans/700.css'

import { Box, Container } from "@chakra-ui/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./pages/LandingPage";
import ClassSearch from './pages/ClassSearch';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Animal from './pages/Animal';

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
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/:class' element={<ClassSearch />} />
            <Route path='/:class/:animalname' element={<Animal />} />
          </Routes>
          <Footer />
      </Container>
    </Box>
  );
}

export default App;
