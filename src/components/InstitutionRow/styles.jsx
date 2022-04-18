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
      background-color: ${props => (props.color? props.color : '#D2BD01')};
      width: ${props => (props.prog? props.prog : '70%')};
      height: 100%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: ${props => ((props.prog === '100%') ? '5px' : '0')};
      border-bottom-right-radius: ${props => ((props.prog === '100%') ? '5px' : '0')};;
    }

    .not-progress {
      background-color: #BBBFBB;
      width: ${props => (props.notProg? props.notProg : '30%')};
      height: 100%;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top-left-radius: ${props => ((props.notProg === '100%') ? '5px' : '0')};
      border-bottom-left-radius: ${props => ((props.notProg === '100%') ? '5px' : '0')};
    }
  }

  img {
    padding: 10px;
    height: 100%;
  }

`