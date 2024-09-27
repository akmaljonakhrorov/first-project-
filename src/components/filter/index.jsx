import React, { useRef } from 'react'
import { Container, Icons, MenuWrapper , Section} from './style'
import { Button, Input,  } from '../generic';
import { Dropdown} from 'antd';



const Filter = () => {
  const counrtyRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipCodeRef = useRef()
  const roomsRef = useRef()
  const sizeRef = useRef()
  const sortRef = useRef()
  const MinPriceRef = useRef()
  const MaxPriceRef = useRef()
  
  const menu = <MenuWrapper>
    <h1 className='subTitle'>Address</h1>
    <Section>
      <Input ref={counrtyRef} placeholder={'Country'}/>
      <Input ref={regionRef} placeholder={'Region'}/>
      <Input ref={cityRef} placeholder={'City'}/>
      <Input ref={zipCodeRef} placeholder={'Zip code'}/>
    </Section>
    <h1 className='subTitle'>Apartment info</h1>
    <Section>
        <Input ref={roomsRef} placeholder={'Rooms'}/>
        <Input ref={sizeRef} placeholder={'Size'}/>
        <Input ref={sortRef} placeholder={'Sort'}/>
    </Section>
    <h1 className='subTitle'>Price</h1>
    <Section>
      <Input ref={MinPriceRef} placeholder={'Min price'}/>
      <Input ref={MaxPriceRef} placeholder={'Max price'}/>
    </Section>
    </MenuWrapper>
  return (
    <Container>
      <Input icon={<Icons.Houses/>} placeholder={'Enter an address, neighborhood, city, or ZIP code'}/> 
      <Dropdown
        overlay = {menu}
        placement="topRight"
      >
        <div>
        <Button type={'light'}><Icons.Setting/>Advanced</Button>
        </div>
      </Dropdown>
      <Button>
            <Icons.Filter/>
            Search
      </Button>
    </Container>
  )
}

export default Filter;
