import { Container, 
         Header, 
         BoxContainer, 
         BoxHeader, 
         BoxBody,
         PaymentBody, 
         CircleDiv, 
         ToggleBtn, 
         ToggleContainer,
         ValueOptions,
         ValueButton,
         ValueInput,
         MessageBox,
         InfoText,
         MessageInput,
         SubmitButton,
         PaymentField,
         PaymentInput,
         ReviewField,
         ReviewBody,
         ReviewText,
         ReviewButton } from './styles'
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { useDonationContext } from '../../context/useDonationContext';

const MakeDonationPage = () => {

  let {inst, child} = useParams();
  const { addDonation, donations } = useDonationContext();
  const navigate = useNavigate()

  const [page, setPage] = useState(1);
  const [frequency, setFrequency] = useState('once');
  const [value, setValue] = useState(0);
  const [personalized, setPersonalized] = useState(false);
  const [message, setMessage] = useState('');
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [cpf, setCpf] = useState('');


  const handleValueChange = (e) => {
    setValue(parseFloat(e.target.value))
    setPersonalized(true)
  }

  const handlePageChange = (e) => {
    setPage(e)
  }

  const handleValueButton = (v) => {
    setValue(v)
    console.log(v)
    setPersonalized(false)
  }

  const handleFrequency = (v) => {
    setFrequency(v)
  }

  const handleDonation = () => {
    const donation = {
      inst: inst,
      child: child,
      frequency: frequency,
      value: value,
      message: message
    }

    addDonation(donation)
    navigate('/donations')
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
            <MessageInput placeholder='Digite sua mensagem aqui' onChange={(e) => {setMessage(e.target.value)}}></MessageInput>
          </MessageBox>
          <SubmitButton onClick={() => {setPage(2)}}>Continuar</SubmitButton>
      </BoxBody>
    )
  }

  const paymentPage = () => {
    return(
      <PaymentBody>
        <PaymentField>
          <InfoText>Número do Cartão</InfoText>
          <PaymentInput value={card} onChange={(e) => {setCard(e.target.value)}} type="number" placeholder='xxxx xxxx xxxx xxxx'></PaymentInput>
        </PaymentField>
        <PaymentField>
          <InfoText>Nome do Portador</InfoText>
          <PaymentInput value={name} onChange={(e) => {setName(e.target.value)}} placeholder='José Maria'></PaymentInput>
        </PaymentField>
        <PaymentField>
          <InfoText>Vencimento</InfoText>
          <PaymentInput value={exp} onChange={(e) => {setExp(e.target.value)}} placeholder='mm/aaaa'></PaymentInput>
        </PaymentField>
        <PaymentField>
          <InfoText>Código de Segurança (CVV)</InfoText>
          <PaymentInput value={cvv} onChange={(e) => {setCvv(e.target.value)}} type="number" placeholder='123'></PaymentInput>
        </PaymentField>
        <PaymentField>
          <InfoText>CPF</InfoText>
          <PaymentInput value={cpf} onChange={(e) => {setCpf(e.target.value)}} placeholder='123.456.789-10'></PaymentInput>
        </PaymentField>
        <SubmitButton onClick={() => {setPage(3)}}>Continuar</SubmitButton>
      </PaymentBody>
    )
  }

  const formatValue = () => {
    let val = value.toLocaleString('pt-BR',{ minimumFractionDigits: 2 });
    let freq = (frequency === 'once')? ' uma única vez' : ' por mês'
    return "R$ " + val + freq
  }

  const formatCard = () => {
    console.log(card)
    return "**** **** **** " + card.toString().slice(card.length - 4)
  }

  const formatCpf = () => {
    return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6,9) + '-' + cpf.slice(cpf.length - 2)
  }

  const reviewPage = () => {
    return(
      <ReviewBody>
        <ReviewField>
          <InfoText>Valor da Doação</InfoText>
          <ReviewText>{formatValue()}</ReviewText>
        </ReviewField>
        <ReviewField>
          <InfoText>Número do Cartão</InfoText>
          <ReviewText>{formatCard()}</ReviewText>
        </ReviewField>
        <ReviewField>
          <InfoText>Nome do Portador</InfoText>
          <ReviewText>{name}</ReviewText>
        </ReviewField>
        <ReviewField>
          <InfoText>Vencimento</InfoText>
          <ReviewText>{exp}</ReviewText>
        </ReviewField>
        <ReviewField>
          <InfoText>Código de Segurança (CVV)</InfoText>
          <ReviewText>{cvv}</ReviewText>
        </ReviewField>
        <ReviewField>
          <InfoText>CPF</InfoText>
          <ReviewText>{formatCpf()}</ReviewText>
        </ReviewField>
        <ReviewField>
          <InfoText>Mensagem da Doação</InfoText>
          <ReviewText>{message}</ReviewText>
        </ReviewField>
        <ReviewButton>
          <SubmitButton onClick={() => {handleDonation()}}>Fazer Doação</SubmitButton>
        </ReviewButton>
      </ReviewBody>
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
          {page === 1? <span>Escolher valor da doação</span> : <></>}
          {page === 2? <span>Dados do Pagamento</span> : <></>}
          {page === 3? <span>Revisar Doação</span> : <></>}
          <CircleDiv>
            {page === 1? <BsCircleFill /> : <BsCircle onClick={() => {handlePageChange(1)}}/>}
            {page === 2? <BsCircleFill /> : <BsCircle onClick={() => {handlePageChange(2)}}/>}
            {page === 3? <BsCircleFill /> : <BsCircle onClick={() => {handlePageChange(3)}}/>}
          </CircleDiv>
        </BoxHeader>
        {page === 1? donationPage() : <></>}
        {page === 2? paymentPage() : <></>}
        {page === 3? reviewPage() : <></>}
      </BoxContainer>
    </Container>
  )
}

export default MakeDonationPage