import styled from 'styled-components';
import Button from '@material-ui/core/Button'

export const HeaderWrapper = styled.div`
    background-color: #1db954;
    height: 8vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 0;
`

export const ButtonWrapper = styled.div`
    /* Tá servindo apenas pra ajustar a posição no Header */
`

export const LogoText = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 2.4rem;
    color: #fff;
    /* margin: 0 auto; */
    :hover{
        cursor: pointer;
    }
`

export const ButtonHeader = styled(Button) `
    color: #fff;
    font-weight: bold;
`