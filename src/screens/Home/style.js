import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import womanHeadphone from '../../img/woman-headphone.jpg';

export const HomeWrapper = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    background: rgb(29,185,84);
    background: linear-gradient(180deg, rgba(29,185,84,1) 0%, rgba(32,32,32,1) 100%);
`

export const SecondWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 55vh;
    margin-top: 2.5%;
`

export const WomanCard = styled.div`
    background-image: url(${womanHeadphone});
    background-size: cover;
    width: 100%;
    height: 100%;
`

export const PaperHome = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 330px;
    margin: 0 auto;
    margin-top: 50px;
`

export const PaperHomeOuvinte = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 330px;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #ededed;
`

export const PaperHomeBanda = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 330px;
    height: 88.1%;
    margin: 0 auto;
    margin-top: 30px;
    background-color: #ededed;
`

export const TypographyHome = styled(Typography) `
    text-align: center;
    margin: 16px;
    margin-top: 32px;
`

export const TypographyHomeTopo = styled(Typography) `
    text-align: center;
    margin-top: 3%;
    color: white;
    letter-spacing: 3px;
`

export const TypographyCreateNewAccount = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;
    opacity: 60%;
`

export const TypographyItem = styled(Typography) `
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8px;
    margin-top: 10px;
`

export const TypographyText = styled(Typography) `
    font-size: 1.1rem;
    font-weight: 400;
    margin-left: 5px;
`

export const ButtonHome = styled(Button) `
    color: #fff;
    font-weight: bold;
    width: 90%;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.03);
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 55px;
    /* border: 1px solid black; */
`

export const CustomSpan = styled.span`
    font-weight: 800;
`