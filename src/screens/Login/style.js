import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const LoginWrapper = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background: rgb(29,185,84);
    background: linear-gradient(180deg, rgba(29,185,84,1) 0%, rgba(32,32,32,1) 100%);
`

export const PaperLogin = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 350px;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #ededed;
`

export const FormLogin = styled.form `
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 50px;
`

export const TypographyLogin = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;    
`

export const TypographyCreateNewAccount = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;
    opacity: 60%;
    :hover{
        cursor: pointer;
    }
`

export const ButtonLogin = styled(Button) `
    color: #fff;
    font-weight: bold;
`