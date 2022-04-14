import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  margin: 10vh 0;
  
  section {
      width: 70vw;
  }

  .info {
      display: flex;
      justify-content: space-between;
      gap: 4vw;
      height: 50vh;

      img {
          width: 60%;
          height: 100%;
          padding: 0;
          object-fit: cover;
      }

      .info-box {
          width: 40%;
          padding: 4vh 3vw;
          border: black 1px solid;;

        p {
            margin: 2vh 0;
            font-size: 1.8vh;
            span {
                font-size: 3vh;
            }
        }

        .buttons {
          margin-top: 5vh;
          display: flex;
          flex-direction: column;
          gap: 2vh;
        }
      }
  }

  button {
    width: 100%;
    font-size: 2.5vh;
    padding: 10px 30px;
    border: none;
    border-radius: 7px;
    
    transition: 300ms;
    cursor: pointer;
  }

  .share {
    background: #82CDE4;
  } 
  .gallery {
    background: #CDC850;
  }

  button:hover {
    transition: 300ms;
    filter: brightness(0.7)
  }

  .progress-bar {
    height: 2vh;
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

  img {
    height: 100%;
  }

`