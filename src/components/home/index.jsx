import React from 'react'
import { Container } from './style'
import { Input } from '../generic';

const Home = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <Input width={200} placeholder={'search'}/>
    </Container>
  )
}

export default Home;
