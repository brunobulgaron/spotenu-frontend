import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const DashboardWrapper = styled.div `
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
    background-color: #ededed;
`

export const PaperDashboard = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 30vw;
    height: 80vh;
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