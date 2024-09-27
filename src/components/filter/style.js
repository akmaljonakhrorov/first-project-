import styled from 'styled-components'
import {ReactComponent as search} from '../../assets/icons/search.svg';
import {ReactComponent as setting} from '../../assets/icons/setting.svg';
import {ReactComponent as houses} from '../../assets/icons/houses.svg'

const Container = styled.div`
display: flex;
padding: var(--padding);
padding-top: 10px;
padding-bottom: 10px;
gap: 20px;
`;
const Icons = styled.div``;
Icons.Filter = styled(search)`
margin-right: 10px;
`;
Icons.Setting = styled(setting)`
margin-right: 10px;
`;
Icons.Houses = styled(houses)`
margin-right: 10px;
`;
const MenuWrapper = styled.div`
padding: 30px;
border: 1px solid #E6E9EC;
border-radius: 5px;
`;
const Section = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;
`;
export {Container,Icons,MenuWrapper,Section};