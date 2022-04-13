import styled from 'styled-components'

export const Container = styled.div`
    .elements {
        margin: 0 30vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8vh;
    }
    hr {
        color: #F1F1F1;
    }

    .link {
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        color: black;
        transition: 200ms;
    }

    .link:hover {
        color: grey;
        transition: 200ms;
    }
`