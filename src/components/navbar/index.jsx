import React from 'react'
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import { Container,Wrapper, Section, Logotip, Link } from './style'
import { navbar } from '../../utils/navbar'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
          <Section onClick={()=>navigate('/home')} $logo='true'>
            <Logotip />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({title, path}, index)=>{
              return <Link className={({isActive})=> isActive && 'active'} key={index} to={path}>
                        {title}
                    </Link>
            }) }
          </Section>
          <Section>
            <button>Sign in</button>
          </Section>
      </Wrapper>
       <Outlet/>
    </Container>
  )
}

export default Navbar;
