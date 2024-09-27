import styled from 'styled-components'
import {ReactComponent as logo} from '../../assets/icons/logo.svg'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
const Main = styled.div`
display: flex;
justify-content: center;
background-color: var(--colorPrimary);
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #fff;
padding: var(--padding);
height: 64px;
width: 100%;
max-width: 1440px;
`;

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({logo})=> logo && 'pointer'};
.active{
    color: #44e10a;
}
`;

const Logotip = styled(logo)`
width: 30px;
margin-right: 12px;
& path {
    fill: #fff;
}
`;

const Link = styled(NavLink)`
color: #fff;
text-decoration: none;
padding: 0px 32px;
`;
export {Container,Wrapper, Section, Logotip, Link, Main};