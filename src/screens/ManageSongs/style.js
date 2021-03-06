import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import TableCell from "@material-ui/core/TableCell";

export const ManageSongsWrapper = styled.div `
    /* height: 100%; */
    /* width: 100%; */
    display: grid;
    grid-template-columns: 40% 60%;
    /* gap: 20px; */
    background-color: #ededed;
`

export const PaperManageSongs = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 90%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 14vh;
    background-color: #ededed;
`

export const PaperListSongs = styled(Paper) `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    height: 60.1vh;
    margin-top: 7.4vh;
    background-color: #ededed;
`

export const CustomSongsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 90%;
    height: 75vh;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #ededed;
`

export const TypographyManageSongs = styled(Typography) `
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const ButtonManageSongs = styled(Button) `
    color: #fff;
    font-weight: bold;
    width: 50%;
    margin: 8px auto;
`

export const ButtonManageSongsVoltar = styled(Button) `
    color: #25252c;
    font-weight: 600;
    width: 50%;
    margin: 8px auto;
`

export const CustomMusicNoteIcon = styled(MusicNoteIcon) `    
    margin: 0 auto;
    margin-top: 30px;
    font-size: 4.5em;
    color: #1db954;
    padding: 10px;
`

export const CustomAddIcon = styled(AddIcon) `
    font-size: 1.3rem;
`

export const CustomKeyboardBackspaceIcon = styled(KeyboardBackspaceIcon) `
    font-size: 1rem;
    margin-right: 2px;
`

export const CustomTableCell = styled(TableCell) `
    font-weight: 800;
`