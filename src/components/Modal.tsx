import styled from 'styled-components';

interface ModalProps {
  contentText: string;
  buttonText: string;
  onClick: () => void;
}
const Modal = ({ contentText, buttonText, onClick }: ModalProps) => {
  return (
    <>
      <Dimmed>
        <Container>
          <Content>{contentText}</Content>
          <Button onClick={onClick}>{buttonText}</Button>
        </Container>
      </Dimmed>
    </>
  );
};

export default Modal;

const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(43, 43, 43, 0.6);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 350px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 300px;
`;

const Content = styled.div`
  height: 154px;
  font-size: 18px;
  line-height: 28px;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;

const Button = styled.button`
  width: 100%;
  line-height: 28px;
  padding: 14px 41px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 0 0 4px 4px;
`;
