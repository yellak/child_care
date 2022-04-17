import { Container, 
         Header, 
         BoxContainer, 
         BoxHeader, 
         BoxBody, 
         CircleDiv, 
         ToggleBtn, 
         ToggleContainer,
         ValueOptions,
         ValueButton,
         ValueInput,
         MessageBox,
         InfoText,
         MessageInput,
         SubmitButton } from './styles'
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const MakeDonationPage = () => {

  const [page, setPage] = useState(1);
  const [frequency, setFrequency] = useState('once');
  const [value, setValue] = useState(0);
  const [personalized, setPersonalized] = useState(false);
  const [message, setMessage] = useState('');

  const handleValueChange = (e) => {
    setValue(e.value)
    setPersonalized(true)
  }

  const handleValueButton = (v) => {
    setValue(v)
    setPersonalized(false)
  }

  const handleFrequency = (v) => {
    setFrequency(v)
  }

  const donationPage = () => {
    return(
      <BoxBody>
          <ToggleContainer>
            <ToggleBtn side={"left"} checked={frequency === 'once'} onClick={() => handleFrequency('once')}>Uma Vez</ToggleBtn>
            <ToggleBtn checked={frequency === 'monthly'} onClick={() => handleFrequency('monthly')}>Mensal</ToggleBtn>
          </ToggleContainer>
          <ValueOptions>
            <ValueButton checked={!personalized && (value === 50)} onClick={() => handleValueButton(50)}>R$ 50,00</ValueButton>
            <ValueButton checked={!personalized && (value === 100)} onClick={() => handleValueButton(100)}>R$ 100,00</ValueButton>
            <ValueButton checked={!personalized && (value === 150)} onClick={() => handleValueButton(150)}>R$ 150,00</ValueButton>
            <ValueButton checked={!personalized && (value === 250)} onClick={() => handleValueButton(250)}>R$ 250,00</ValueButton>
            <ValueButton checked={!personalized && (value === 500)} onClick={() => handleValueButton(500)}>R$ 500,00</ValueButton>
            <ValueButton checked={!personalized && (value === 800)} onClick={() => handleValueButton(800)}>R$ 800,00</ValueButton>
          </ValueOptions>
          <ValueInput type="number" step="0.01" placeholder='Valor Personalizado' value={personalized? value: ''} onChange={handleValueChange}></ValueInput>
          <MessageBox>
            <InfoText>Enviar mensagem com a doação</InfoText>
            <MessageInput placeholder='Digite sua mensagem aqui' onChange={(e) => {setMessage(e.message)}}></MessageInput>
          </MessageBox>
          <SubmitButton onClick={() => {setPage(2)}}>Continuar</SubmitButton>
      </BoxBody>
    )
  }

  return(
    <Container>
      <Header>
        <span>Instituição Criança Top</span>
        <span>Nome da Criança</span>
      </Header>
      <BoxContainer>
        <BoxHeader>
          <span>Escolher valor da doação</span>
          <CircleDiv>
            <BsCircleFill style={{marginLeft: 1}}/>
            <BsCircle />
            <BsCircle />
          </CircleDiv>
        </BoxHeader>
        {page === 1? donationPage() : ''}
      </BoxContainer>
    </Container>
  )
}

export default MakeDonationPage