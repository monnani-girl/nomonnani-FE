import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
}

const Modal = ({setModalOpen, text}: ModalProps) => { 
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <Background>
            <Container>
                <Text>{text}</Text>
                <ButtonBox>
                    <CloseButton onClick={closeModal}>닫기</CloseButton>
                    <UploadButton 
                        to='/select/5'
                    >다시 올리기</UploadButton>
                </ButtonBox>
            </Container>
        </Background>
    );
}

export default Modal;

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: translate(-50%, -50%);
    z-index: 9;
    background-color: rgba(43, 43, 43, 0.6);
`;

const Container = styled.div`
    width: 350px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFDFB;
    border-radius: 4px;
    box-shadow: 0px 2px 7px 0px #00000026;
    z-index: 10;

    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Text = styled.div`
    width: 300px;
    height: 154px;
    font-size: 18px;
    font-family: 'Gmarket Sans';
    line-height: 28px;
    text-align: center;
    position: relative;
    top: 25%;
`;

const ButtonBox = styled.div`
    display: flex;
    width: 350px;
    height: 56px;
    z-index: 2;
`;

const CloseButton = styled.button`
    width: 175px;
    height: 56px;
    padding: 14px 44px;
    border: none;
    background-color: #e7e7e7;
    color: var(--sub-black);
    border-radius: 0 0 0 4px;
    font-family: 'Gmarket Sans';
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
`;

const UploadButton = styled(Link)`
    width: 175px;
    height: 56px;
    padding: 14px 44px;
    border: none;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0 0 0 4px;
    font-family: 'Gmarket Sans';
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
`;