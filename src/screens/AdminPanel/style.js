import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import BuildIcon from '@material-ui/icons/Build';

export const AdminPanelWrapper = styled.div `
    /* height: 100%; */
    /* width: 100%; */
    display: grid;
    grid-template-columns: 40% 60%;
    /* gap: 20px; */
    background-color: #ededed;
`

export const PaperAdminPanel = styled(Paper) `
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

export const TypographyAdminPanel = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const ButtonAdminPanel = styled(Button) `
    color: #fff;
    font-weight: bold;
    width: 50%;
    margin: 8px auto;
`

export const CustomBuildIcon = styled(BuildIcon) `    
    margin: 0 auto;
    margin-top: 30px;
    font-size: 4.5em;
    color: #1db954;
    padding: 10px;
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