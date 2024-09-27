import styled from "styled-components";

const getType =({type})=>{
    switch (type) {
        case "light":
            return {background: '#E6E9EC', color:'black',border: "none" }
        case "dark":
            return {background: '#0D263B', color:'#FFFFFF',border: "1px solid #FFFFFF", borderRadius: '2px'}
        case "primary":
            return {background: '#0061DF', color:'#FFFFFF',border: "none",borderRadius: '2px' }
        
        default:return {background: '#0061DF', color:'#FFFFFF',border: "none",borderRadius: '2px' }
    }
}
const Container = styled.input`
display: flex;
justify-content: center;
align-items: center;
border-radius:2px;
border: 1px solid #E6E9EC;
/* ${getType} */
/* min-width: 120px; */
line-height:20px;
font-size: 14px;
height: ${({height})=> height? `${height}px`: "44px"};
width: ${({width})=> width? `${width}px`: "100%"};
outline: none;
color: #0D263B;
padding-left: ${({icon})=> icon ? "50px": "20px"}
`;

const Wrapper = styled.div`
position: relative;
display: flex;
align-items: center;
width: ${({width})=> width? `${width}px`: "100%"};
`;

const Icon = styled.div`
position:absolute;
left: 15px;
cursor: pointer;
`;
export {Container,Wrapper,Icon}