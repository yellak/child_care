import styled from 'styled-components'

export const Container = styled.tr`
  p {
    margin: 0 0 5px 0;
  }
  td {
    border-bottom: 1px solid;
    padding: 0 10px;
    font-size: 20px;
  }
  
  button.btn-green {
    width: 100%;
    font-size: 18px;
    padding: 10px 30px;
    border: none;
    border-radius: 7px;
    background: #62CD50;
    transition: 300ms;
    cursor: pointer;
    margin: 3px;
  }

  button.btn-mustard {
    width: 100%;
    font-size: 18px;
    padding: 10px 30px;
    border: none;
    border-radius: 7px;
    background: #CDC850;
    transition: 300ms;
    cursor: pointer;
    margin: 3px;
  }

  button:hover {
    transition: 300ms;
    filter: brightness(0.7)
  }

  img {
    padding: 10px;
    height: 100%;
    width: 133px;
  }

`