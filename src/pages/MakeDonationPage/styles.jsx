import styled from 'styled-components'

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`

export const Header = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

  span{
    font-size: 2rem;
    font-weight: 200;
  }
`

export const BoxContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 63vh;
  width: 40%;
  @media (max-width: 1000px)
  {
    width: 70%;
  }
  background: rgba(15, 144, 152, 0.39);
  border-radius: 26px;
`

export const BoxHeader = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.1rem;
  border-bottom: 1px solid;
  width: 100%;

  span{
    font-size: 1.25rem;
  }
`
export const CircleDiv = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.4rem;
  cursor: pointer;
`;

export const BoxBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ToggleBtn = styled.button`
  width: 5rem;
  height: 2rem;
  background-color: ${props => (props.checked? '#F1F1F1' : 'transparent')};
  border: 0.5px solid #000; 
  border-radius: ${props => (props.side === 'left'? '10px 0 0 10px' : '0 10px 10px 0')};

  &:hover{
    background-color: #E2E2E2;
  }
`;

export const ToggleContainer = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

export const ValueOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  width: 65%;
`;

export const ValueButton = styled.button`
  width: 7rem;
  height: 4rem;
  font-size: 1.2rem;
  background-color: ${props => (props.checked? '#F1F1F1' : 'transparent')};
  border: 0.5px solid #000; 

  &:hover{
    background-color: #E2E2E2;
  }
`;

export const ValueInput = styled.input`
  height: 3rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  width: 21.7rem;
  border: 0.5px solid #000; 
  background-color: transparent;
  padding-left: 1rem;
  padding-rigth: 1rem;
`;

export const MessageInput = styled.textarea`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  height: 5rem;
  padding-top: 0.25rem;
  margin-top: 0.5rem;
  width: 22.4rem;
  border: 0.5px solid #000; 
  background-color: transparent;
  padding-left: 0.5rem;
  padding-rigth: 0.5rem;
`;

export const InfoText = styled.span`

`;

export const MessageBox = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  width: 23.4rem;
  height: 2.7rem;
  color: #F1F1F1;
  font-size: 1rem;
  border: none;
  background: linear-gradient(90.96deg, rgba(48, 5, 140, 0.84) 0%, rgba(9, 34, 98, 0.84) 100%);
  border-radius: 8px;
  cursor: pointer;

  &:hover{
    background: linear-gradient(10deg, rgba(48, 5, 140, 0.84) 0%, rgba(9, 34, 98, 0.84) 100%);
  }
`;