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
const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius:2px;
${getType}
min-width: 120px;
line-height:20px;
font-size: 14px;
height: ${({height})=> height? `${height}px`: "44px"};
width: ${({width})=> width? `${width}px`: "130px"};
cursor: pointer;
&:active{
    opacity: 0.7;
}
`;

export {Container}