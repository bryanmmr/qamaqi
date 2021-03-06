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
import UserData from './pages/User';
import Classification from './pages/Classification';
import InsertAnimal from './pages/InsertAnimal';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';

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
            <Route path='/user' element={<UserData />} />
            <Route path='/contribute' element={<InsertAnimal />} />
            <Route path='/search'  element={<Search />} />
            <Route path='/classification'  element={<Classification />} />
            <Route path='/dashboard'  element={<Dashboard />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/classification/:class' element={<ClassSearch />} />
            <Route path='/classification/:class/:animalname' element={<Animal />} />
          </Routes>
          <Footer />
      </Container>
    </Box>
  );
}

export default App;
