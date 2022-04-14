import styled from 'styled-components'

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  margin: 5vh 0;
  
  table {
    text-align: center;
    width: 80vw;
    border-collapse: collapse;
  }

  th {
    font-size: 25px;
    font-weight: 100;
    padding-bottom: 2vh;
  }

  tbody{
    border: 1px solid;
  }
`