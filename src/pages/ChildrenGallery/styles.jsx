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

  .slick-slide img {
    margin: auto;
    height: 22vh;
}

.slick-track {
    background-color: rgba(15, 144, 152, 0.41);
}

.info-box {
    background-color: rgba(23, 101, 106, 0.63);
    height: 45vh;
    width: 19vw;
    padding-top: 1vw;
}

.info-box p {
    color: #D0C3C3;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    padding-left: 0.4vw;
    padding-top: 1.5vh;
}

.details {
    margin-top: 55px;
}

.details #detail-left {
    display: inline-block;
    *display: inline;
    padding-left: 25px;
    vertical-align: top;
    width: 58vw;
}

#detail-left h1 {
    font-size: 2.7rem;
}

#detail-left p {
    font-size: 1.2rem;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 1;
}

.details #detail-right {
    display: inline-block;
    *display: inline;
    vertical-align: middle;
    justify-items: center;
}

.apadrinhar {
    background-color: rgba(207, 127, 8);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 48px;
    text-align: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: 10px;
    width: 19vw;
}

.selected {
    border-color: black;
    border-radius: 4px;
    border-style: solid;
}
`

export const SliderAndDetails = styled.div`
  width: 80vw;
  height: 90vh;
  background: #EDEDED;
`

