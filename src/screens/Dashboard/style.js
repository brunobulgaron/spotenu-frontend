import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import BuildIcon from '@material-ui/icons/Build';
import StarsIcon from '@material-ui/icons/Stars';
import PersonIcon from '@material-ui/icons/Person';

export const DashboardWrapper = styled.div `
    /* height: 100%; */
    /* width: 100%; */
    display: grid;
    grid-template-columns: 70% 30%;
    /* gap: 20px; */
    background-color: #ededed;
`

export const PaperDashboard = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    height: 75vh;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #ededed;
`

export const TypographyDashboard = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const ButtonDashboard = styled(Button) `
    color: #fff;
    font-weight: bold;
    width: 50%;
    margin: 8px auto;
`

export const CustomBuildIcon = styled(BuildIcon) `    
    margin: 0 auto;
    margin-top: 30px;
    font-size: 4em;
    color: #1f1f1f;
    padding: 10px;
`

export const CustomStarsIcon = styled(StarsIcon) `    
    margin: 0 auto;
    margin-top: 30px;
    font-size: 4em;
    color: #1f1f1f;
    padding: 10px;
`

export const CustomPersonIcon = styled(PersonIcon) `    
    margin: 0 auto;
    margin-top: 30px;
    font-size: 4em;
    color: #1f1f1f;
    padding: 10px;
`