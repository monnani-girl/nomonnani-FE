import styled from 'styled-components';
import headerLogo from '../assets/header.png';
import resultHeaderLogo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // TODO : 헤더 로고 이미지 조건부 렌더링 코드
  // const logoSrc = location.pathname === '/result' ? resultHeaderLogo : headerLogo;
  const logoSrc = headerLogo

  return <HeaderLogo src={logoSrc} width={logoSrc === resultHeaderLogo ? '92px' : '17px'} onClick={() => navigate('/')} />;
};

export default Header;

const HeaderLogo = styled.img`
  width: ${(props) => props.width};
  cursor: pointer;
`;