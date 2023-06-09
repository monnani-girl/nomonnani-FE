import styled from 'styled-components';
import headerLogo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return <HeaderLogo src={headerLogo} onClick={() => navigate('/')} />;
};

export default Header;

const HeaderLogo = styled.img`
  width: 92px;
  cursor: pointer;
`;