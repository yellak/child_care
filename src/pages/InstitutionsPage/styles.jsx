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

  td {
    border-bottom: 1px solid;
    padding: 0 10px;
    font-size: 20px;
  }

  tbody{
    border: 1px solid;
  }

  img {
    padding: 10px;
    height: 100%;
  }

  p {
    margin: 0 0 5px 0;
  }

  button {
    width: 100%;
    font-size: 18px;
    padding: 10px 30px;
    border: none;
    border-radius: 7px;
    background: #62CD50;
    transition: 300ms;
    cursor: pointer;
  }

  button:hover {
    transition: 300ms;
    filter: brightness(0.7)
  }

  .progress-bar {
    height: 10px;
    width: 100%;
    display: flex;

    .progress {
      background-color: #D2BD01;
      width: 70%;
      height: 100%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .not-progress {
      background-color: #BBBFBB;
      width: 30%;
      height: 100%;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`