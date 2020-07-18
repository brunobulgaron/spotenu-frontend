import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const ManageProfileWrapper = styled.div `
    /* height: 100%; */
    /* width: 100%; */
    display: grid;
    grid-template-columns: 40% 60%;
    /* gap: 20px; */
    background-color: #ededed;
`

export const PaperManageProfile = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 90%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 14vh;
    background-color: #ededed;
`

export const CustomSVGWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 90%;
    height: 75vh;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #ededed;
`

export const TypographyManageProfile = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const ButtonManageProfile = styled(Button) `
    color: #fff;
    font-weight: bold;
    width: 50%;
    margin: 8px auto;
`

export const ButtonManageProfileVoltar = styled(Button) `
    color: #25252c;
    font-weight: 600;
    width: 50%;
    margin: 8px auto;
`

export const ButtonManageProfileExcluir = styled(Button) `
    background-color: #d30500;
    color: white;
    font-weight: 800;
    width: 50%;
    margin: 8px auto;
    :hover{
        background-color: #ab0400;
    }
`

export const CustomPersonIcon = styled(PersonIcon) `    
    margin: 0 auto;
    margin-top: 30px;
    font-size: 4.5em;
    color: #1db954;
    padding: 10px;
`

export const CustomHighlightOffIcon = styled(HighlightOffIcon) `
    font-size: 1.3rem;
`

export const CustomKeyboardBackspaceIcon = styled(KeyboardBackspaceIcon) `
    font-size: 1rem;
    margin-right: 2px;
`

export const CustomSVG = styled.img `
    width: 100%;
    height: 100%;
    padding: 12%;
    opacity: 60%;
    transition: .4s ease-in-out;
    :hover{
        transform: scale(1.05);
        opacity: 100%;
    }
`

export const TypographyProfileInfo = styled(Typography) `
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 10px;
`

export const CustomSpan = styled.span`
    font-weight: 800;
`